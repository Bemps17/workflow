// modules/ui.js
import { dom } from './dom.js';
import { state } from './state.js';
import { quotes, defaultRewards } from './config.js';
import { saveData } from './storage.js';

// --- Fonctions utilitaires ---
export const generateId = () => Date.now().toString(36) + Math.random().toString(36).substring(2);
const sanitizeInput = (input) => {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML.trim();
};

// --- Fonctions de mise à jour de l'UI ---
export const applySettingsToUI = () => {
    document.documentElement.classList.toggle('dark', state.settings.theme === 'dark');
    dom.themeIcon.textContent = state.settings.theme === 'dark' ? '☀️' : '🌙';
    dom.themeToggleBtn.querySelector('span:last-child').textContent = state.settings.theme === 'dark' ? 'Mode Clair' : 'Mode Sombre';
    dom.workDurationInput.value = state.settings.workDuration;
    dom.breakDurationInput.value = state.settings.breakDuration;
    dom.soundToggle.checked = state.settings.soundEnabled;
    dom.localNotifToggle.checked = state.settings.localNotifEnabled;
    document.documentElement.style.setProperty('--custom-primary', state.settings.customPrimaryColor);
};

export const updateStats = () => {
    const total = state.tasks.length;
    const completed = state.tasks.filter(task => task.completed).length;
    const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

    dom.totalTasksEl.textContent = total;
    dom.totalTasksBis.textContent = total;
    dom.completedTasksEl.textContent = completed;
    dom.completionRateEl.textContent = `${rate}%`;
    dom.progressFill.style.width = `${rate}%`;
    dom.progressFill.textContent = total > 0 ? `${rate}%` : '';
    dom.streakCountEl.textContent = state.streak;

    updateAdvancedStats();
};

export const updateAdvancedStats = () => {
    const today = new Date().toDateString();
    const tasksToday = state.tasks.filter(t => t.completed && t.completedTimestamp && new Date(t.completedTimestamp).toDateString() === today).length;
    const pomodorosToday = state.pomodoroHistory.filter(p => p.type === 'work' && new Date(p.date).toDateString() === today).length;

    dom.tasksToday.textContent = tasksToday;
    dom.pomodorosToday.textContent = pomodorosToday;
};

export const displayRandomQuote = () => {
    const quote = quotes[Math.floor(Math.random() * quotes.length)];
    dom.quoteDisplay.innerHTML = `"${quote.text}" - <strong>${quote.author}</strong>`;
};

export const updatePomodoroCycleDisplay = () => {
    let display = '';
    for (let i = 0; i < state.settings.cyclesForLongBreak; i++) {
        display += (i < state.pomodoroCycleCount) ? '🍅 ' : '⚪ ';
    }
    dom.pomodoroCycleDisplay.textContent = display.trim();
};

// --- Logique des Tâches et Sous-tâches ---
const renderSubtasks = (taskElement, task) => {
    const subtaskList = taskElement.querySelector('.subtask-list');
    subtaskList.innerHTML = '';
    if (!task.subtasks) task.subtasks = [];

    task.subtasks.forEach(subtask => {
        const li = document.createElement('li');
        li.className = `flex items-center gap-2 text-sm ${subtask.completed ? 'line-through text-slate-500' : ''}`;
        li.innerHTML = `
            <input type="checkbox" id="${subtask.id}" ${subtask.completed ? 'checked' : ''} class="h-4 w-4 rounded text-primary focus:ring-primary">
            <label for="${subtask.id}">${subtask.text}</label>
        `;
        li.querySelector('input').addEventListener('change', (e) => {
            subtask.completed = e.target.checked;
            li.classList.toggle('line-through', subtask.completed);
            li.classList.toggle('text-slate-500', subtask.completed);
            saveData();
        });
        subtaskList.appendChild(li);
    });
};

export const createTaskElement = (task) => {
    const item = document.createElement('li');
    item.className = `task-item bg-white dark:bg-slate-800/50 rounded-lg shadow-sm transition-all`;
    item.dataset.taskId = task.id;

    const completedClasses = task.completed ? 'opacity-50' : '';
    const priorityClasses = { high: 'border-red-500', medium: 'border-yellow-500', low: 'border-green-500' };
    
    // Logique pour afficher la date d'échéance si elle existe
    const dueDateHTML = task.dueDate 
        ? `<div class="mt-2 text-xs font-semibold text-slate-500 dark:text-slate-400">
              échéance : ${new Date(task.dueDate).toLocaleDateString('fr-FR')}
           </div>` 
        : '';
    
    // Construit le HTML à partir des propriétés structurées de l'objet task
    const taskTextHTML = `
        <div class="font-bold text-slate-800 dark:text-slate-100 ${task.completed ? 'line-through' : ''}">${task.title || 'Tâche sans titre'}</div>
        ${task.description ? `<p class="mt-1 text-sm text-slate-600 dark:text-slate-300 ${task.completed ? 'line-through' : ''}">${task.description.replace(/\n/g, '<br>')}</p>` : ''}
        ${dueDateHTML}
        ${task.tags && task.tags.length > 0 ? `<div class="mt-2 flex gap-2 flex-wrap">${task.tags.map(tag => `<span class="text-xs font-semibold px-2 py-1 bg-primary/10 text-primary/80 rounded-full">${tag}</span>`).join('')}</div>` : ''}
    `;

    item.innerHTML = `
        <div class="p-4 border-l-4 ${priorityClasses[task.priority]} rounded-lg">
            <div class="flex items-start">
                <div class="flex-grow task-content pt-1 cursor-pointer ${completedClasses}" tabindex="0">${taskTextHTML}</div>
                <div class="actions flex-shrink-0 flex flex-col items-center ml-4 space-y-2">
                    <button class="complete-btn p-2 rounded-full hover:bg-green-100 dark:hover:bg-green-800/50" aria-label="Compléter">${task.completed ? '🔄' : '✅'}</button>
                    <button class="delete-btn p-2 rounded-full hover:bg-red-100 dark:hover:bg-red-800/50" aria-label="Supprimer">🗑️</button>
                    <button class="toggle-subtasks-btn p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 transition-transform">▾</button>
                </div>
            </div>
            <div class="subtasks-container hidden mt-4 pl-6 border-l-2 border-slate-200 dark:border-slate-700">
                <ul class="subtask-list space-y-2"></ul>
                <div class="flex gap-2 mt-3">
                    <input type="text" class="new-subtask-input flex-grow p-1 text-sm rounded-md bg-slate-100 dark:bg-slate-700 border border-slate-300 dark:border-slate-600" placeholder="Ajouter une sous-tâche...">
                    <button class="add-subtask-btn px-2 py-1 text-sm rounded-md bg-primary text-white font-bold hover:opacity-90">+</button>
                </div>
            </div>
        </div>`;

    // Event Listeners pour cet élément de tâche
    item.querySelector('.complete-btn').addEventListener('click', () => { toggleComplete(task.id); saveData(); updateAdvancedStats(); });
    item.querySelector('.delete-btn').addEventListener('click', () => { deleteTask(task.id); saveData(); updateAdvancedStats(); });
    
    const subtasksContainer = item.querySelector('.subtasks-container');
    const toggleBtn = item.querySelector('.toggle-subtasks-btn');
    toggleBtn.addEventListener('click', () => {
        subtasksContainer.classList.toggle('hidden');
        toggleBtn.classList.toggle('rotate-180');
    });

    item.querySelector('.add-subtask-btn').addEventListener('click', () => {
        const input = item.querySelector('.new-subtask-input');
        const text = sanitizeInput(input.value);
        if (text) {
            if (!task.subtasks) task.subtasks = [];
            task.subtasks.push({ id: generateId(), text, completed: false });
            renderSubtasks(item, task);
            input.value = '';
            saveData();
        }
    });
    
    renderSubtasks(item, task);
    return item;
};

export const renderTasks = () => {
    const priorityOrder = { high: 0, medium: 1, low: 2 };
    const sortedTasks = [...state.tasks].sort((a, b) => {
        if (a.completed !== b.completed) return a.completed ? 1 : -1;
        if (state.sortBy === 'priority') return priorityOrder[a.priority] - priorityOrder[b.priority];
        return b.created - a.created;
    });
    dom.taskList.innerHTML = '';
    sortedTasks.forEach(task => dom.taskList.appendChild(createTaskElement(task)));
    updateStats();
};

export const addTask = () => {
    const title = sanitizeInput(dom.newTaskInput.value);
    if (!title) return;
    
    // Création d'un objet tâche structuré et complet
    state.tasks.unshift({ 
        id: generateId(), 
        title,
        description: "",
        tags: [],
        completed: false, 
        priority: state.selectedPriority, 
        created: Date.now(),
        subtasks: [],
        dueDate: null
    });

    dom.newTaskInput.value = '';
    renderTasks();
};

export const toggleComplete = (id) => {
    const task = state.tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        task.completedTimestamp = task.completed ? Date.now() : null;
        if(task.completed) {
            state.streak++;
            if(typeof confetti === 'function') confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
        } else {
            state.streak = Math.max(0, state.streak - 1);
        }
        renderTasks();
    }
};

export const deleteTask = (id) => {
    state.tasks = state.tasks.filter(t => t.id !== id);
    renderTasks();
};

// --- Logique des récompenses ---
const createRewardElement = (id, text, isChecked = false) => {
    const li = document.createElement('li');
    li.className = `flex items-center gap-2 ${isChecked ? 'line-through text-slate-500' : ''}`;
    li.innerHTML = `
        <input type="checkbox" id="${id}" ${isChecked ? 'checked' : ''} class="h-4 w-4 rounded text-primary focus:ring-primary">
        <label for="${id}" class="flex-grow">${sanitizeInput(text)}</label>
        ${id.startsWith('custom-') ? '<button class="delete-custom-reward text-red-500 hover:text-red-700">✕</button>' : ''}
    `;
    li.querySelector('input').addEventListener('change', (e) => {
        if (id.startsWith('custom-')) state.customRewards[id].checked = e.target.checked;
        li.classList.toggle('line-through', e.target.checked);
        li.classList.toggle('text-slate-500', e.target.checked);
        saveData();
    });
    if (id.startsWith('custom-')) {
        li.querySelector('.delete-custom-reward').addEventListener('click', () => {
            delete state.customRewards[id];
            li.remove();
            saveData();
        });
    }
    dom.rewardList.appendChild(li);
};

const addCustomReward = () => {
    const text = dom.newRewardInput.value.trim();
    if (!text) return;
    const id = `custom-${generateId()}`;
    state.customRewards[id] = { text, checked: false };
    createRewardElement(id, text, false);
    dom.newRewardInput.value = '';
};

export const initRewards = () => {
    dom.rewardList.innerHTML = '';
    defaultRewards.forEach(reward => createRewardElement(reward.id, reward.text));
    Object.entries(state.customRewards).forEach(([id, reward]) => createRewardElement(id, reward.text, reward.checked));
    dom.addRewardBtn.addEventListener('click', () => { addCustomReward(); saveData(); });
    dom.newRewardInput.addEventListener('keypress', e => { if (e.key === 'Enter') { addCustomReward(); saveData(); } });
};

export const showRandomRewardSuggestion = () => {
    const allRewardElements = document.querySelectorAll('.reward-list label');
    if (allRewardElements.length === 0) return;
    const rewardsTexts = Array.from(allRewardElements).map(label => label.textContent.trim());
    const randomRewardText = rewardsTexts[Math.floor(Math.random() * rewardsTexts.length)];
    if (typeof confetti === 'function') confetti({ particleCount: 150, spread: 90, origin: { y: 0.6 } });
    const modal = document.createElement('div');
    modal.className = 'fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4';
    modal.innerHTML = `
        <div class="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl p-8 text-center max-w-sm w-full transform transition-all opacity-0 animate-fade-in-scale">
            <h3 class="text-lg font-bold text-primary mb-2">🎉 Session terminée ! 🎉</h3>
            <p class="text-slate-600 dark:text-slate-300 mb-4">Pourquoi ne pas faire une pause avec ceci ?</p>
            <div class="bg-primary/10 dark:bg-primary/20 p-4 rounded-lg text-primary dark:text-slate-100 font-semibold text-xl mb-6">${randomRewardText}</div>
            <button class="modal-close-btn w-full px-4 py-2 rounded-lg bg-primary text-white font-bold hover:opacity-90">Génial !</button>
        </div>`;
    document.body.appendChild(modal);
    modal.querySelector('.modal-close-btn').addEventListener('click', () => modal.remove());
};