// modules/storage.js
import { state } from './state.js';
import { projectData } from './config.js'; 
import { generateId } from './ui.js';

const safeLocalStorage = {
    get: (key) => {
        try {
            const data = localStorage.getItem(key);
            return data ? JSON.parse(data) : null;
        } catch (e) { return null; }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, JSON.stringify(value));
        } catch (e) { console.error(`Erreur d'écriture dans le localStorage`, e); }
    }
};

const getInitialProjectTasks = () => {
    const initialTasks = [];
    for (const listName in projectData) {
        if (Object.prototype.hasOwnProperty.call(projectData, listName)) {
            const cards = projectData[listName];
            for (const card of cards) {
                initialTasks.push({
                    id: generateId(),
                    title: card.title,
                    description: card.desc,
                    tags: card.labels || [],
                    completed: (card.labels || []).includes('done'),
                    priority: (card.labels || []).includes('urgent') ? 'high' : 'medium',
                    created: Date.now(),
                    subtasks: []
                });
            }
        }
    }
    return initialTasks;
};

export const loadData = () => {
    state.tasks = safeLocalStorage.get('chronorganizer_tasks') || getInitialProjectTasks();
    state.pomodoroHistory = safeLocalStorage.get('chronorganizer_pomodoroHistory') || [];
    state.customRewards = safeLocalStorage.get('chronorganizer_customRewards') || {};
    state.streak = safeLocalStorage.get('chronorganizer_streak') || 0;
    const loadedSettings = safeLocalStorage.get('chronorganizer_settings');
    if (loadedSettings) {
        state.settings = { ...state.settings, ...loadedSettings };
    }
};

export const saveData = () => {
    safeLocalStorage.set('chronorganizer_tasks', state.tasks);
    safeLocalStorage.set('chronorganizer_pomodoroHistory', state.pomodoroHistory);
    safeLocalStorage.set('chronorganizer_customRewards', state.customRewards);
    safeLocalStorage.set('chronorganizer_streak', state.streak);
    safeLocalStorage.set('chronorganizer_settings', state.settings);
};