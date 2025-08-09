// modules/pomodoro.js
import { dom } from './dom.js';
import { state } from './state.js';
import { showRandomRewardSuggestion, updatePomodoroCycleDisplay, updateAdvancedStats } from './ui.js';
import { initCharts } from './charts.js';
import { saveData } from './storage.js';

export const updateTimerDisplay = () => {
    if(!dom.timerDisplay) return;
    const minutes = Math.floor(state.timeInSeconds / 60);
    const seconds = state.timeInSeconds % 60;
    dom.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    document.title = `${dom.timerDisplay.textContent} - Chronorganizer`;
};

export const startPauseTimer = () => {
    state.isPaused = !state.isPaused;
    dom.startPauseBtn.innerHTML = state.isPaused ? '▶️ Démarrer' : '⏸️ Pause';
    if (state.isPaused) {
        clearInterval(state.timer);
    } else {
        state.timer = setInterval(() => {
            state.timeInSeconds--;
            if (state.timeInSeconds < 0) {
                clearInterval(state.timer);
                if (state.isWorkSession) {
                    showRandomRewardSuggestion();
                    state.pomodoroHistory.push({ date: new Date().toISOString(), type: 'work', duration: state.settings.workDuration });
                    state.pomodoroCycleCount++;
                    updatePomodoroCycleDisplay();
                }
                state.isWorkSession = !state.isWorkSession;
                if (!state.isWorkSession && state.pomodoroCycleCount >= state.settings.cyclesForLongBreak) {
                    state.timeInSeconds = (state.settings.longBreakDuration || 15) * 60;
                    dom.timerMode.textContent = 'Pause Longue 🛋️';
                    state.pomodoroCycleCount = 0;
                    updatePomodoroCycleDisplay();
                } else {
                    state.timeInSeconds = (state.isWorkSession ? state.settings.workDuration : state.settings.breakDuration) * 60;
                    dom.timerMode.textContent = state.isWorkSession ? 'Session de Travail' : 'Pause';
                }
                state.isPaused = true;
                dom.startPauseBtn.innerHTML = '▶️ Démarrer';
                if (state.settings.soundEnabled) new Audio('https://www.soundjay.com/buttons/sounds/button-16.mp3').play().catch(e=>console.warn("Autoplay bloqué"));
                updateAdvancedStats();
                initCharts();
                saveData();
            }
            updateTimerDisplay();
        }, 1000);
    }
};

export const resetTimer = () => {
    clearInterval(state.timer);
    state.isPaused = true;
    state.isWorkSession = true;
    state.timeInSeconds = (state.settings.workDuration || 25) * 60;
    dom.startPauseBtn.innerHTML = '▶️ Démarrer';
    dom.timerMode.textContent = 'Session de Travail';
    state.pomodoroCycleCount = 0;
    updatePomodoroCycleDisplay();
    updateTimerDisplay();
};