// modules/importer.js
import { dom } from './dom.js';
import { state } from './state.js';
import { saveData } from './storage.js';
import { renderTasks, generateId } from './ui.js';

let tasksToImport = [];

const openModal = () => {
    tasksToImport = [];
    dom.importFileInput.value = '';
    dom.importPreview.innerHTML = 'En attente d\'un fichier...';
    dom.importConfirmBtn.disabled = true;
    dom.importModal.classList.remove('hidden');
};

const closeModal = () => {
    dom.importModal.classList.add('hidden');
};

const handleFileSelect = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
        const content = e.target.result;
        try {
            let parsedData;
            if (file.name.endsWith('.json')) {
                // Le JSON est supposé être déjà dans le bon format
                parsedData = JSON.parse(content);
                tasksToImport = parsedData; // Pas de mapping nécessaire pour le JSON
            } else if (file.name.endsWith('.csv')) {
                parsedData = parseCSV(content);
                
                // Étape cruciale : Mapper les données brutes du CSV vers le format de tâche de l'application
                tasksToImport = parsedData.map(rawTask => {
                    // 1. Convertir les "Checklist Items" en sous-tâches
                    const subtasks = (rawTask['Checklist Items'] || '')
                        .split(';')
                        .filter(item => item.trim() !== '')
                        .map(itemText => ({
                            id: generateId(),
                            text: itemText.trim(),
                            completed: false
                        }));

                    // 2. Convertir les "Labels" en tags et en déduire la priorité
                    const tags = (rawTask['Labels'] || '').split(',').map(t => t.trim()).filter(t => t);
                    if (rawTask['List Name']) {
                        const cleanListName = rawTask['List Name'].trim().replace(/📋|📝|🔄|👀|✅|🚧/g, '').trim();
                        tags.unshift(`Liste:${cleanListName}`);
                    }

                    let priority = 'medium';
                    if (tags.some(t => t.toLowerCase() === 'urgent')) priority = 'high';
                    if (tags.some(t => t.toLowerCase() === 'faible')) priority = 'low';

                    // 3. Construire l'objet tâche final
                    return {
                        id: rawTask['id'] || null,
                        title: rawTask['Card Name'] || 'Tâche sans titre',
                        description: rawTask['Card Description'] ? rawTask['Card Description'].replace(/ \| /g, '\n') : '',
                        priority: priority,
                        completed: tags.some(t => t.toLowerCase() === 'terminé'),
                        tags: tags,
                        dueDate: rawTask['Due Date'] || null,
                        subtasks: subtasks,
                        created: Date.now()
                    };
                });
            }

            previewImport();

        } catch (error) {
            dom.importPreview.innerHTML = `<span class="text-red-500">Erreur : Le fichier est malformé ou illisible.</span><br><small>${error.message}</small>`;
            dom.importConfirmBtn.disabled = true;
        }
    };
    reader.readAsText(file);
};

const parseCSV = (csv) => {
    const lines = csv.split(/\r\n|\n/).filter(line => line.trim() !== '');
    if (lines.length < 2) return [];
    
    const headers = lines[0].split(',').map(h => h.trim());
    const dataRows = [];
    const regex = /(?:"([^"]*(?:""[^"]*)*)"|([^,]*))(?:,|$)/g;

    for (let i = 1; i < lines.length; i++) {
        const row = {};
        let match;
        let headerIndex = 0;
        // On s'assure de ne pas dépasser le nombre de headers
        while (headerIndex < headers.length && (match = regex.exec(lines[i])) !== null) {
            const header = headers[headerIndex++];
            if (header) {
                // match[1] est pour les valeurs entre guillemets, match[2] pour les autres
                const value = match[1] !== undefined ? match[1].replace(/""/g, '"') : match[2];
                row[header] = value;
            }
        }
        dataRows.push(row);
    }
    return dataRows;
};


const previewImport = () => {
    if (!Array.isArray(tasksToImport)) {
        dom.importPreview.innerHTML = `<span class="text-red-500">Erreur : Format de données invalide.</span>`;
        dom.importConfirmBtn.disabled = true;
        return;
    }

    let toAdd = 0;
    let toUpdate = 0;
    tasksToImport.forEach(newTask => {
        if (newTask.id && state.tasks.find(t => t.id === newTask.id)) {
            toUpdate++;
        } else {
            toAdd++;
        }
    });

    dom.importPreview.innerHTML = `
        <p class="font-semibold">Prévisualisation de l'import :</p>
        <ul>
            <li><strong class="text-green-500">${toAdd}</strong> tâches à ajouter.</li>
            <li><strong class="text-yellow-500">${toUpdate}</strong> tâches à mettre à jour.</li>
        </ul>`;
    dom.importConfirmBtn.disabled = false;
};

const confirmImport = () => {
    tasksToImport.forEach(newTask => {
        const existingTaskIndex = newTask.id ? state.tasks.findIndex(t => t.id === newTask.id) : -1;

        if (existingTaskIndex !== -1) {
            const existingTask = state.tasks[existingTaskIndex];
            const updatedTask = {
                ...existingTask,
                ...newTask,
                subtasks: [...existingTask.subtasks, ...newTask.subtasks]
            };
            state.tasks[existingTaskIndex] = updatedTask;
        } else {
            if (!newTask.id) newTask.id = generateId();
            state.tasks.unshift(newTask);
        }
    });

    renderTasks();
    saveData();
    closeModal();
};

export const initImporter = () => {
    dom.importBtn.addEventListener('click', openModal);
    dom.importCancelBtn.addEventListener('click', closeModal);
    dom.importFileInput.addEventListener('change', handleFileSelect);
    dom.importConfirmBtn.addEventListener('click', confirmImport);
};