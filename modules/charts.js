// modules/charts.js
import { dom } from './dom.js';
import { state } from './state.js';

export const initCharts = () => {
    if (!dom.productivityChartEl || !window.Chart) return;
    if (state.productivityChart) state.productivityChart.destroy();
    
    const labels = Array(7).fill().map((_, i) => {
        const d = new Date();
        d.setDate(d.getDate() - (6 - i));
        return d.toLocaleDateString('fr', { weekday: 'short' });
    });
    const data = Array(7).fill(0);
    const oneDay = 24 * 60 * 60 * 1000;
    const today = new Date();
    state.pomodoroHistory.forEach(session => {
        const sessionDate = new Date(session.date);
        const diffDays = Math.floor((new Date(today.toDateString()) - new Date(sessionDate.toDateString())) / oneDay);
        if (diffDays >= 0 && diffDays < 7 && session.type === 'work') {
            data[6 - diffDays]++;
        }
    });
    const isDarkMode = document.documentElement.classList.contains('dark');
    const gridColor = isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
    const textColor = isDarkMode ? '#cbd5e1' : '#475569';
    state.productivityChart = new window.Chart(dom.productivityChartEl.getContext('2d'), { 
        type: 'bar', 
        data: { 
            labels, 
            datasets: [{ 
                label: 'Sessions complétées', 
                data, 
                backgroundColor: state.settings.customPrimaryColor, 
                borderRadius: 4,
                borderWidth: 0
            }] 
        },
        options: { 
            responsive: true, 
            maintainAspectRatio: false, 
            plugins: { 
                legend: { display: false },
                title: { display: true, text: 'Productivité (7 derniers jours)', color: textColor, font: { size: 16 } }
            }, 
            scales: { 
                y: { 
                    beginAtZero: true, 
                    ticks: { stepSize: 1, color: textColor },
                    grid: { color: gridColor }
                },
                x: {
                    ticks: { color: textColor },
                    grid: { display: false }
                }
            } 
        }
    });
};