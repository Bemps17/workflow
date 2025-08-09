// modules/config.js

export const projectData = {
    "📋 BACKLOG": [
        {
            title: "🎯 Vision & Identité de Marque",
            labels: ["urgent", "technique"],
            desc: "Mission: Plateforme web signature\nIdentité: Luxe, Exclusivité, Sérénité, Sur-mesure"
        },
        {
            title: "🎨 Direction Artistique Complète",
            labels: ["design", "urgent"],
            desc: "Palette: #FCFBF7 #F5F5DC #0A2F28 #C0A062\nStyles: Glassmorphism, Néo-Skeuomorphism\n☐ Créer palettes Light/Dark\n☐ Définir effets Glassmorphism\n☐ Créer icônes line art"
        },
        {
            title: "🏗️ Architecture Technique",
            labels: ["technique", "urgent"],
            desc: "Stack: Next.js 14+, Strapi, PostgreSQL, Redis\nArchitecture: Mobile First, PWA Ready\n☐ Setup Next.js TypeScript\n☐ Configurer Strapi\n☐ Setup PostgreSQL + Redis"
        },
        {
            title: "🔒 Système d'Authentification",
            labels: ["backend", "devops"],
            desc: "JWT avec refresh tokens\nFeatures: Login/Logout, Forgot Password, Rate limiting\n☐ Setup JWT middleware\n☐ Créer endpoints auth"
        },
        {
            title: "💬 Chatbot Intelligent",
            labels: ["feature", "design"],
            desc: "Options: Rasa ou Botpress\nFAQ automatique, Prise de RDV\n☐ Choisir solution\n☐ Créer intents\n☐ Designer interface"
        },
        {
            title: "📱 PWA Configuration",
            labels: ["feature", "frontend"],
            desc: "Installation mobile, Mode offline, Push notifications\n☐ Créer manifest.json\n☐ Service Worker\n☐ Tester installation"
        },
        {
            title: "🌱 Easter Egg Footer",
            labels: ["feature", "design"],
            desc: "Animation pousse → arbre\nMessage: Un grand jardin commence par une petite graine\n☐ Créer animation Framer Motion"
        },
        {
            title: "📊 Analytics & Monitoring",
            labels: ["devops", "seo"],
            desc: "GA4, Sentry, Web Vitals, Uptime Robot\n☐ Configurer GA4\n☐ Setup Sentry\n☐ Web Vitals"
        }
    ],
    "📝 TODO - Sprint 1": [
        {
            title: "🚀 Setup Initial du Projet",
            labels: ["technique", "urgent"],
            desc: "Due: 15/08/2025\nEnvironnement Next.js + Strapi + PostgreSQL\n☐ Créer repo GitHub\n☐ Init Next.js TypeScript\n☐ Setup Tailwind CSS"
        },
        {
            title: "🎨 Design System - Atoms",
            labels: ["design", "frontend"],
            desc: "Due: 18/08/2025\nComposants: Button, Input, Icons, Theme Toggle\n☐ Button variants\n☐ Icon sprites\n☐ Documentation Storybook"
        },
        {
            title: "📄 Homepage - Hero Section",
            labels: ["frontend", "urgent"],
            desc: "Due: 20/08/2025\nAnimation entrée, Image immersive, CTA principal\n☐ Structure HTML\n☐ Animation Framer Motion\n☐ Tests responsive"
        },
        {
            title: "🏠 Homepage - Services Section",
            labels: ["frontend", "seo"],
            desc: "Due: 22/08/2025\n3-4 services principaux avec icônes\n☐ Grid responsive\n☐ Animations scroll\n☐ Intégration CMS"
        },
        {
            title: "🖼️ Portfolio Grid Component",
            labels: ["frontend", "design"],
            desc: "Due: 25/08/2025\nFiltres catégorie, Lazy loading, Lightbox\n☐ Component structure\n☐ Filter logic\n☐ Image optimization"
        }
    ],
    "🔄 EN COURS": [
        {
            title: "🎯 Analyse Cahier des Charges",
            labels: ["technique", "urgent"],
            desc: "Analyse et validation documents\n✅ Documents lus\n✅ Architecture créée\n☐ Meeting validation"
        },
        {
            title: "🗂️ Setup Strapi CMS",
            labels: ["backend", "technique"],
            desc: "Configuration CMS Headless\n☐ Installation Strapi\n☐ Créer content types\n☐ API configuration"
        },
        {
            title: "🎨 Maquettes Figma",
            labels: ["design", "urgent"],
            desc: "Création maquettes haute fidélité\n☐ Wireframes\n☐ Design System\n☐ Desktop/Mobile versions"
        }
    ],
    "👀 EN REVIEW": [
        {
            title: "📐 Architecture Technique",
            labels: ["technique"],
            desc: "Document architecture complet\n✅ Frontend/Backend\n✅ Security\n☐ Validation client"
        },
        {
            title: "🌐 SEO Strategy Document",
            labels: ["seo"],
            desc: "Keywords, Meta tags, Schema.org\nEn attente de feedback"
        }
    ],
    "✅ TERMINÉ": [
        {
            title: "📋 Brief Initial Reçu",
            labels: ["done"],
            desc: "✅ Tous documents reçus et analysés"
        },
        {
            title: "🔍 Analyse Concurrentielle",
            labels: ["done"],
            desc: "✅ 5 sites analysés\n✅ Opportunités identifiées"
        },
        {
            title: "💰 Estimation Budget",
            labels: ["done"],
            desc: "✅ Coûts et planning validés"
        }
    ],
    "🚧 BLOCKED": [
        {
            title: "🚫 Intégration Paiement",
            labels: ["urgent", "backend"],
            desc: "BLOQUÉ: Attente choix solution bancaire\nOptions: Stripe, PayPal, Banque locale"
        },
        {
            title: "📸 Photos Haute Résolution",
            labels: ["urgent", "design"],
            desc: "BLOQUÉ: Attente photos pro\nBesoin: 20-30 photos HD par projet"
        }
    ]
};

export const defaultRewards = [
    { id: 'reward-coffee', text: 'Pause café ☕' },
    { id: 'reward-episode', text: 'Regarder un épisode 📺' },
    { id: 'reward-walk', text: 'Faire une promenade 🚶' },
    { id: 'reward-music', text: 'Session musique 🎵' },
    { id: 'reward-meditate', text: 'Méditation guidée 🧘' },
    { id: 'reward-read', text: '10 min de lecture 📖' },
];

export const quotes = [
    { text: "Un voyage de mille lieues commence toujours par un premier pas.", author: "Lao Tseu" },
    { text: "Le seul endroit où le succès précède le travail est dans le dictionnaire.", author: "Vidal Sassoon" },
    { text: "La meilleure façon de prédire l'avenir est de le créer.", author: "Peter Drucker" },
    { text: "La discipline est le pont entre les buts et les réalisations.", author: "Jim Rohn" },
    { text: "La vie est ce que vous en faites. Toujours l'a été, toujours le sera.", author: "Eleanor Roosevelt" },
    { text: "Ne comptez pas les jours, faites que les jours comptent.", author: "Muhammad Ali" },
    { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "La réussite n'est pas la clé du bonheur. Le bonheur est la clé de la réussite.", author: "Albert Schweitzer" },
    { text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" },
    { text: "Faites de votre vie un rêve, et d'un rêve, une réalité.", author: "Antoine de Saint-Exupéry" },
    { text: "La seule façon de faire un excellent travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "N'attendez pas. Le moment ne sera jamais parfait.", author: "Napoleon Hill" },
    { text: "La chute n'est pas un échec. L'échec, c'est de rester là où on est tombé.", author: "Socrate" },
    { text: "Le succès, c'est tomber sept fois et se relever huit.", author: "Proverbe japonais" },
    { text: "La seule limite à notre épanouissement de demain sera nos doutes d'aujourd'hui.", author: "Franklin D. Roosevelt" },
    { text: "Agissez comme s'il était impossible d'échouer.", author: "Winston Churchill" },
    { text: "Ce n'est pas parce que les choses sont difficiles que nous n'osons pas, c'est parce que nous n'osons pas qu'elles sont difficiles.", author: "Sénèque" },
    { text: "Le génie est fait d'un pour cent d'inspiration et de quatre-vingt-dix-neuf pour cent de transpiration.", author: "Thomas Edison" },
    { text: "Visez la lune. Même si vous la manquez, vous atterrirez parmi les étoiles.", author: "Les Brown" },
    { text: "Le futur appartient à ceux qui croient en la beauté de leurs rêves.", author: "Eleanor Roosevelt" },
    { text: "Le meilleur moment pour planter un arbre était il y a 20 ans. Le deuxième meilleur moment est maintenant.", author: "Proverbe chinois" },
    { text: "La vie est 10% ce qui nous arrive et 90% comment nous y réagissons.", author: "Charles R. Swindoll" },
    { text: "Ne regardez pas l'horloge ; faites ce qu'elle fait, continuez d'avancer.", author: "Sam Levenson" },
    { text: "La seule façon de faire du bon travail est d'aimer ce que vous faites.", author: "Steve Jobs" },
    { text: "Vous ne trouvez pas le bonheur, vous le créez.", author: "Camilla Eyring Kimball" },
    { text: "Fais de ta vie un rêve, et d’un rêve, une réalité.", author: "Antoine de Saint-Exupéry" },
    { text: "Rêver grand, commencer petit, agir maintenant.", author: "Robin Sharma" },
    { text: "Tout ce que l’esprit de l’homme peut concevoir et croire, il peut l’accomplir.", author: "Napoleon Hill" },
    { text: "Ils ne savaient pas que c’était impossible, alors ils l’ont fait.", author: "Mark Twain" },
    { text: "Ce que vous faites aujourd'hui peut améliorer tous vos lendemains.", author: "Ralph Marston" },
    { text: "Ne jugez pas chaque jour à la récolte que vous faites mais aux graines que vous semez.", author: "Robert Louis Stevenson" },
    { text: "Ce n’est pas la montagne que nous conquérons, mais nous-mêmes.", author: "Edmund Hillary" },
    { text: "La plus grande gloire n’est pas de ne jamais tomber, mais de se relever à chaque chute.", author: "Confucius" },
    { text: "Faites que le rêve dévore votre vie afin que la vie ne dévore pas votre rêve.", author: "Antoine de Saint-Exupéry" },
    { text: "Le bonheur n’est pas quelque chose de prêt à l’emploi. Il vient de vos propres actions.", author: "Dalaï Lama" },
    { text: "Ne rêvez pas votre vie, vivez vos rêves.", author: "Auteur inconnu" },
    { text: "On ne devient pas ce que l’on veut, on devient ce que l’on croit.", author: "Oprah Winfrey" },
    { text: "Même une horloge arrêtée donne l’heure juste deux fois par jour.", author: "Proverbe" },
    { text: "Il n’y a qu’une façon d’échouer, c’est d’abandonner avant d’avoir réussi.", author: "Georges Clémenceau" },
    { text: "Votre temps est limité, ne le gâchez pas en menant une existence qui n’est pas la vôtre.", author: "Steve Jobs" },
    { text: "Faites ce que vous pouvez, avec ce que vous avez, là où vous êtes.", author: "Theodore Roosevelt" },
    { text: "Ce que vous pensez, vous le devenez. Ce que vous ressentez, vous l’attirez. Ce que vous imaginez, vous le créez.", author: "Bouddha" },
    { text: "Soyez vous-même, tous les autres sont déjà pris.", author: "Oscar Wilde" },
    { text: "Il est toujours temps de faire ce qui est juste.", author: "Martin Luther King Jr." },
    { text: "La motivation vous fait démarrer, mais c’est l’habitude qui vous fait continuer.", author: "Jim Ryun" },
    { text: "N’ayez pas peur d’avancer lentement. Ayez peur de rester immobile.", author: "Proverbe chinois" },
    { text: "Quand on veut une chose, tout l’univers conspire à nous permettre de réaliser notre rêve.", author: "Paulo Coelho" },
    { text: "Accepte ce qui est, laisse aller ce qui était, aie confiance en ce qui sera.", author: "Bouddha" },
    { text: "L’important n’est pas de convaincre, mais de donner à réfléchir.", author: "Bernard Werber" },
    { text: "Il n’y a pas de raccourci vers n’importe où qui en vaille la peine.", author: "Beverly Sills" },
    { text: "Plus vous transpirerez à l’entraînement, moins vous saignerez au combat.", author: "Proverbe militaire" },
    { text: "N’essayez pas de devenir un homme de succès. Essayez de devenir un homme de valeur.", author: "Albert Einstein" },
    { text: "Le courage ne rugit pas toujours. Parfois, c’est la petite voix à la fin de la journée qui dit : je réessaierai demain.", author: "Mary Anne Radmacher" },
    { text: "Celui qui déplace une montagne commence par déplacer de petites pierres.", author: "Confucius" },
    { text: "Il n’est jamais trop tard pour être ce que vous auriez pu être.", author: "George Eliot" },
    { text: "Le succès n’est pas la clé du bonheur. Le bonheur est la clé du succès.", author: "Albert Schweitzer" },
    { text: "Ce que vous faites fait une différence. Vous devez décider quel genre de différence vous voulez faire.", author: "Jane Goodall" },
    { text: "Tu n’échoues jamais tant que tu ne cesses d’essayer.", author: "Albert Einstein" },
    { text: "Ce ne sont pas les années dans votre vie qui comptent, mais la vie dans vos années.", author: "Abraham Lincoln" },
    { text: "Il faut viser la perfection pour atteindre l’excellence.", author: "Henri Queuille" },
    { text: "Rien ne résiste à la volonté d’un homme qui veut faire son chemin.", author: "Victor Hugo" },
    { text: "L'avenir dépend de ce que vous faites aujourd'hui.", author: "Mahatma Gandhi" },
    { text: "Sois le changement que tu veux voir dans le monde.", author: "Mahatma Gandhi" },
    { text: "Il n'y a pas de hasard, il n'y a que des rendez-vous.", author: "Paul Éluard" },
    { text: "Transforme tes blessures en sagesse.", author: "Oprah Winfrey" },
    { text: "N’arrête pas quand tu es fatigué. Arrête quand tu as terminé.", author: "Marilyn Monroe" },
    { text: "La confiance en soi est le premier secret du succès.", author: "Ralph Waldo Emerson" },
    { text: "La volonté trouve le chemin.", author: "Proverbe anglais" },
    { text: "Tout le monde pense à changer le monde, mais personne ne pense à se changer lui-même.", author: "Léon Tolstoï" },
    { text: "Chaque matin, nous renaissons. Ce que nous faisons aujourd’hui est ce qui importe le plus.", author: "Bouddha" },
    { text: "Si tu veux aller vite, marche seul. Si tu veux aller loin, marchons ensemble.", author: "Proverbe africain" },
    { text: "Ce que tu ne veux pas qu’on te fasse, ne le fais pas aux autres.", author: "Confucius" },
    { text: "Quand tu traverses l’enfer, continue d’avancer.", author: "Winston Churchill" },
    { text: "Rien n’est permanent, sauf le changement.", author: "Héraclite" }
];