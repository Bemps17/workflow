// app.js
import { dom } from './modules/dom.js';
import { state } from './modules/state.js';
import { loadData, saveData } from './modules/storage.js';
import { 
    applySettingsToUI, 
    renderTasks, 
    displayRandomQuote,
    initRewards,
    addTask,
    updatePomodoroCycleDisplay,
    updateAdvancedStats
} from './modules/ui.js';
import { resetTimer, startPauseTimer } from './modules/pomodoro.js';
import { initCharts } from './modules/charts.js';
import { initImporter } from './modules/importer.js';

// Gère la connexion entre les actions de l'utilisateur et la logique de l'application
const setupEventListeners = () => {
    // --- Actions sur les tâches ---
    dom.addTaskBtn.addEventListener('click', () => { 
        addTask(); 
        saveData(); 
        updateAdvancedStats(); 
    });
    dom.newTaskInput.addEventListener('keypress', e => { 
        if (e.key === 'Enter') { 
            addTask(); 
            saveData(); 
            updateAdvancedStats(); 
        }
    });

    // --- Contrôles du Pomodoro ---
    dom.startPauseBtn.addEventListener('click', startPauseTimer);
    dom.resetBtn.addEventListener('click', resetTimer);

    // --- Paramètres et UI générale ---
    dom.themeToggleBtn.addEventListener('click', () => {
        state.settings.theme = document.documentElement.classList.contains('dark') ? 'light' : 'dark';
        applySettingsToUI();
        saveData();
    });

    dom.priorityBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dom.priorityBtns.forEach(b => b.dataset.active = 'false');
            btn.dataset.active = 'true';
            state.selectedPriority = btn.dataset.priority;
        });
    });

    dom.sortTasks.addEventListener('change', () => {
        state.sortBy = dom.sortTasks.value;
        renderTasks();
    });

    // --- Paramètres du Sidebar ---
    dom.workDurationInput.addEventListener('change', () => {
        state.settings.workDuration = parseInt(dom.workDurationInput.value);
        resetTimer();
        saveData();
    });

    dom.breakDurationInput.addEventListener('change', () => {
        state.settings.breakDuration = parseInt(dom.breakDurationInput.value);
        saveData(); // Sauvegarde pour la prochaine pause
    });

    dom.hamburgerBtn.addEventListener('click', () => dom.sidebar.classList.remove('-translate-x-full'));
    dom.closeSidebarBtn.addEventListener('click', () => dom.sidebar.classList.add('-translate-x-full'));
    dom.fabAddTask.addEventListener('click', () => dom.newTaskInput.focus());
};

// Fonction principale qui lance toute l'application
const initialize = () => {
    loadData();
    applySettingsToUI();
    resetTimer();
    renderTasks();
    initRewards();
    initCharts();
    initImporter();
    updatePomodoroCycleDisplay();
    displayRandomQuote();
    setupEventListeners();
    console.log("Chronorganizer est prêt.");
};

// --- Lancement de l'application ---
initialize();