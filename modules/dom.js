// modules/dom.js
export const dom = {
    // --- Éléments de base ---
    newTaskInput: document.getElementById('new-task-input'),
    addTaskBtn: document.getElementById('add-task-btn'),
    taskList: document.getElementById('task-list'),
    priorityBtns: document.querySelectorAll('.priority-btn'),
    sortTasks: document.getElementById('sort-tasks'),
    quoteDisplay: document.getElementById('quote-display'),
    ariaAnnounce: document.getElementById('aria-announce'),

    // --- Sidebar ---
    sidebar: document.getElementById('sidebar'),
    hamburgerBtn: document.getElementById('hamburger-btn'),
    closeSidebarBtn: document.getElementById('close-sidebar-btn'),
    themeToggleBtn: document.getElementById('theme-toggle-btn'),
    themeIcon: document.getElementById('theme-icon'),
    soundToggle: document.getElementById('sound-toggle'),
    localNotifToggle: document.getElementById('local-notif-toggle'),

    // --- Pomodoro ---
    timerDisplay: document.getElementById('timer-display'),
    timerMode: document.getElementById('timer-mode'),
    startPauseBtn: document.getElementById('start-pause-timer-btn'),
    resetBtn: document.getElementById('reset-timer-btn'),
    workDurationInput: document.getElementById('work-duration'),
    breakDurationInput: document.getElementById('break-duration'),
    pomodoroCycleDisplay: document.getElementById('pomodoro-cycle-display'), // ÉLÉMENT CORRIGÉ

    // --- Stats Globales ---
    totalTasksEl: document.getElementById('total-tasks'),
    totalTasksBis: document.getElementById('total-tasks-bis'), // ÉLÉMENT CORRIGÉ
    completedTasksEl: document.getElementById('completed-tasks'),
    completionRateEl: document.getElementById('completion-rate'),
    streakCountEl: document.getElementById('streak-count'),
    progressFill: document.getElementById('progress-fill'),
    productivityChartEl: document.getElementById('productivity-chart'),

    // --- Stats du Jour (NOUVEAUX ÉLÉMENTS AJOUTÉS) ---
    tasksToday: document.getElementById('tasks-today'),
    pomodorosToday: document.getElementById('pomodoros-today'),

    // --- Récompenses ---
    newRewardInput: document.getElementById('new-reward-input'),
    addRewardBtn: document.getElementById('add-reward-btn'),
    rewardList: document.querySelector('.reward-list'),
    
    // --- Import / Actions ---
    fabAddTask: document.getElementById('fab-add-task'),
    importBtn: document.getElementById('import-btn'),
    importModal: document.getElementById('import-modal'),
    importFileInput: document.getElementById('import-file-input'),
    importPreview: document.getElementById('import-preview'),
    importCancelBtn: document.getElementById('import-cancel-btn'),
    importConfirmBtn: document.getElementById('import-confirm-btn'),
};