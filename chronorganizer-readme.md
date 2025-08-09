# 🍅 Chronorganizer

<div align="center">

![workflow Logo](https://raw.githubusercontent.com/Bemps17/workflow/main/assets/logo.svg)

**Une application de productivité moderne alliant gestion de tâches et technique Pomodoro**

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=flat-square&logo=chart.js&logoColor=white)](https://www.chartjs.org/)

</div>

## ✨ Aperçu

Chronorganizer est une application web progressive (PWA) qui combine la puissance de la gestion de tâches avec l'efficacité de la technique Pomodoro. Conçue pour maximiser votre productivité, elle offre une interface moderne et intuitive pour organiser votre travail quotidien.

### 🎯 Fonctionnalités Principales

- **🍅 Timer Pomodoro Avancé** : Sessions de travail/pause avec cycles personnalisables
- **📋 Gestion de Tâches Complète** : Création, priorisation, sous-tâches et tags
- **📊 Tableaux de Bord** : Statistiques détaillées et graphiques de productivité
- **🏆 Système de Récompenses** : Motivation par suggestions de récompenses personnalisées
- **🌙 Mode Sombre/Clair** : Interface adaptable selon vos préférences
- **📱 Design Responsive** : Optimisé mobile, tablette et desktop
- **💾 Sauvegarde Locale** : Données persistantes dans le navigateur
- **📥 Import/Export** : Support JSON et CSV pour vos données

## 🚀 Démo en Direct

[🔗 Voir la démo](https://votre-lien-demo.com) *(remplacez par votre URL)*

## 📸 Captures d'Écran

<div align="center">

| Mode Clair | Mode Sombre |
|------------|-------------|
| ![Light Mode](screenshots/light-mode.png) | ![Dark Mode](screenshots/dark-mode.png) |

</div>

## 🛠️ Technologies Utilisées

### Frontend
- **HTML5** - Structure sémantique
- **CSS3** + **TailwindCSS** - Styling moderne et responsive
- **JavaScript ES6+** - Logique applicative modulaire
- **Chart.js** - Visualisation de données
- **Canvas Confetti** - Animations de célébration

### Architecture
- **Modules ES6** - Code organisé et maintenable
- **LocalStorage API** - Persistance des données
- **Service Worker** - Fonctionnalités PWA
- **Responsive Design** - Mobile-first approach

## 📦 Installation & Utilisation

### 🎬 Démarrage Rapide

1. **Clonez le repository**
```bash
git clone https://github.com/Bemps17/workflow.git
cd workflow
```

2. **Lancez un serveur local**
```bash
# Avec Python 3
python -m http.server 8000

# Avec Node.js (live-server)
npx live-server

# Avec PHP
php -S localhost:8000
```

3. **Ouvrez votre navigateur**
```
http://localhost:8000
```

### 🔧 Configuration

L'application fonctionne immédiatement sans configuration. Les paramètres peuvent être ajustés via l'interface :

- **Durées Pomodoro** : Personnalisez les temps de travail et de pause
- **Thème** : Basculez entre mode clair et sombre
- **Notifications** : Activez/désactivez les sons et notifications système

## 📁 Structure du Projet

```
chronorganizer/
├── 📄 index.html              # Point d'entrée principal
├── 🎨 style.css               # Styles personnalisés
├── ⚙️ app.js                  # Orchestrateur principal
├── 🔧 sw.js                   # Service Worker PWA
├── 📂 modules/
│   ├── 🎯 state.js           # Gestion d'état globale
│   ├── 🖥️ dom.js             # Références DOM
│   ├── 🎨 ui.js              # Interface utilisateur
│   ├── ⏱️ pomodoro.js        # Logique timer
│   ├── 📊 charts.js          # Graphiques
│   ├── 💾 storage.js         # Persistance données
│   ├── 📥 importer.js        # Import/Export
│   └── ⚙️ config.js          # Configuration
└── 📸 screenshots/           # Images de démonstration
```

## 🎮 Utilisation

### ➕ Gestion des Tâches
1. **Ajouter une tâche** : Tapez dans le champ et appuyez sur Entrée
2. **Définir la priorité** : Haute (rouge), Moyenne (jaune), Basse (verte)
3. **Organiser** : Triez par priorité ou date de création
4. **Sous-tâches** : Cliquez sur ▾ pour décomposer vos tâches

### 🍅 Timer Pomodoro
1. **Démarrer** : Cliquez sur ▶️ pour lancer votre session
2. **Cycles** : Visualisez votre progression (🍅🍅🍅🍅)
3. **Pauses automatiques** : L'app gère les transitions travail/pause
4. **Récompenses** : Recevez des suggestions motivantes après chaque session

### 📊 Suivi des Performances
- **Tableau de bord** : Consultez vos stats du jour
- **Graphiques** : Analysez votre productivité sur 7 jours
- **Séries** : Maintenez votre motivation avec le compteur de série

## 🔧 Personnalisation

### 🎨 Thèmes
L'application supporte les thèmes clair/sombre avec adaptation automatique des graphiques et couleurs.

### ⚙️ Paramètres Avancés
Modifiez directement dans `modules/config.js` :
- Citations motivantes
- Récompenses par défaut
- Données de projet initiales

### 🏆 Récompenses Personnalisées
Ajoutez vos propres suggestions de récompenses via l'interface utilisateur.

## 📱 PWA (Progressive Web App)

Chronorganizer peut être installé comme une application native :

1. **Chrome/Edge** : Icône "Installer" dans la barre d'adresse
2. **Firefox** : Menu → "Installer cette application"
3. **Safari iOS** : Partager → "Sur l'écran d'accueil"

### ✨ Fonctionnalités PWA
- 📱 Installation sur mobile/desktop
- 🔄 Fonctionnement hors-ligne (cache)
- 🎯 Expérience native
- 🚀 Chargement rapide

## 🤝 Contribution

Les contributions sont les bienvenues ! Voici comment participer :

### 🐛 Signaler un Bug
Ou pas ...

### 💡 Proposer une Fonctionnalité
1. Ouvrez une issue avec le label `enhancement`
2. Décrivez la fonctionnalité souhaitée
3. Expliquez le cas d'usage

### 🔧 Développement

```bash
# Fork du projet
git clone https://github.com/votre-fork/chronorganizer.git

# Créer une branche feature
git checkout -b feature/ma-fonctionnalite

# Commitez vos changements
git commit -m "✨ Ajout de ma fonctionnalité"

# Pushez et créez une Pull Request
git push origin feature/ma-fonctionnalite
```

## 📋 Roadmap

### 🎯 Version 2.0
- [ ] 🔄 Synchronisation cloud
- [ ] 👥 Collaboration d'équipe
- [ ] 📱 Application mobile native
- [ ] 🤖 Suggestions IA pour la productivité
- [ ] 📈 Analytics avancées
- [ ] 🔗 Intégrations (Notion, Trello, etc.)

### 🛠️ Améliorations Techniques
- [ ] ⚡ Migration vers TypeScript
- [ ] 🧪 Tests unitaires (Jest)
- [ ] 🔄 CI/CD avec GitHub Actions
- [ ] 📊 Lighthouse 100/100
- [ ] ♿ Amélioration accessibilité

## 🐛 Problèmes Connus

- **Safari iOS** : Les notifications peuvent nécessiter une interaction utilisateur
- **Firefox** : Certaines animations CSS peuvent être ralenties
- **Edge Legacy** : Support limité des modules ES6

## 📜 Licence

Ce projet est sous licence **MIT** - voir le fichier [LICENSE](LICENSE) pour plus de détails.

```
MIT License -
```

## 👨‍💻 Auteur

**Bertrand FOUQUET** - *Développeur Full Stack*

- 🌐 Portfolio : [votre-site.com](https://votre-site.com)
- 💼 LinkedIn : [linkedin.com/in/bertrandfouquet](https://linkedin.com/in/bertrandfouquet)
- 📧 Email : bertrand.fouquet@email.com

## 🙏 Remerciements

- **TailwindCSS** pour le framework CSS moderne
- **Chart.js** pour les graphiques élégants
- **Canvas Confetti** pour les animations festives
- **Communauté Open Source** pour l'inspiration continue

---

<div align="center">

**⭐ Si ce projet vous a aidé, n'hésitez pas à lui donner une étoile !**

[![GitHub stars](https://img.shields.io/github/stars/votre-username/chronorganizer?style=social)](https://github.com/votre-username/chronorganizer/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/votre-username/chronorganizer?style=social)](https://github.com/votre-username/chronorganizer/network)

</div>

---

*Développé avec ❤️ pour la communauté des développeurs productifs*