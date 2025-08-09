// modules/state.js
export let state = {
    tasks: [],
    pomodoroHistory: [],
    customRewards: {},
    selectedPriority: 'medium',
    sortBy: 'priority',
    timer: null,
    timeInSeconds: 0,
    isPaused: true,
    isWorkSession: true,
    streak: 0,
    // NOUVEAU
    pomodoroCycleCount: 0, 
    settings: { 
        theme: 'light', 
        workDuration: 25, 
        breakDuration: 5,
        // NOUVEAU
        longBreakDuration: 15,
        cyclesForLongBreak: 4,
        soundEnabled: true, 
        localNotifEnabled: true, 
        customPrimaryColor: '#3b82f6' 
    },
    productivityChart: null
};