# Exo7 - Site Web

Site web moderne pour Exo7 (cours et exercices de mathématiques), construit avec SvelteKit et hébergé sur GitHub Pages.

## 🚀 Fonctionnalités

- **Architecture moderne** : SvelteKit + TypeScript
- **Contenu en Markdown** : Facile à éditer et à maintenir
- **Responsive** : Compatible mobile, tablette et desktop
- **Déploiement automatique** : GitHub Actions déploie automatiquement sur GitHub Pages
- **Léger et rapide** : Site statique optimisé

## 📋 Prérequis

- Node.js 18+ et npm
- Git

## 🛠️ Installation locale

1. Cloner le repository :
```bash
git clone https://github.com/votre-username/exo7-site.git
cd exo7-site
```

2. Installer les dépendances :
```bash
npm install
```

3. Lancer le serveur de développement :
```bash
npm run dev
```

Le site sera accessible sur `http://localhost:5173`

## 📝 Structure du projet

```
exo7-site/
├── content/              # Contenu en Markdown
│   ├── cours/           # Cours (algebre-l1.md, analyse-l1.md, ...)
│   ├── videos/          # Pages vidéos
│   ├── qcm/             # Pages QCM
│   ├── activites/       # Activités (Scratch, Python)
│   └── pages/           # Pages statiques (à propos, etc.)
├── src/
│   ├── lib/
│   │   ├── components/  # Composants réutilisables
│   │   └── markdown.ts  # Utilitaire pour charger les Markdown
│   └── routes/          # Pages du site
├── static/              # Fichiers statiques (images, fonts, etc.)
└── .github/workflows/   # GitHub Actions
```

## ✏️ Modifier le contenu

Voir [CONTRIBUTING.md](./CONTRIBUTING.md) pour savoir comment ajouter ou modifier du contenu.

## 🚀 Déploiement

### Configuration GitHub Pages

1. Allez dans Settings > Pages de votre repository
2. Sélectionnez "GitHub Actions" comme source
3. Le site sera déployé automatiquement à chaque push sur `main`

### URL du site

Le site sera accessible à : `https://votre-username.github.io/exo7-site/`

**Important** : Si vous changez le nom du repository, mettez à jour le `base` dans `svelte.config.js` :

```javascript
paths: {
  base: process.env.NODE_ENV === 'production' ? '/nouveau-nom' : ''
}
```

### Domaine personnalisé

Pour utiliser un domaine personnalisé :
1. Ajoutez un fichier `static/CNAME` contenant votre domaine
2. Configurez les DNS chez votre registrar

## 🛠️ Commandes disponibles

```bash
npm run dev          # Lancer le serveur de développement
npm run build        # Construire le site pour la production
npm run preview      # Prévisualiser le build de production
npm run check        # Vérifier le code TypeScript
```

## 📦 Technologies utilisées

- **SvelteKit** : Framework web moderne
- **TypeScript** : Typage statique
- **Marked** : Parser Markdown
- **Gray-matter** : Parser frontmatter YAML
- **GitHub Pages** : Hébergement gratuit

## 📄 Licence

Ce projet est sous licence [à définir].

## 👥 Contributeurs

Voir [content/pages/auteurs.md](content/pages/auteurs.md) pour la liste des auteurs.

## 🐛 Signaler un bug

Ouvrez une issue sur GitHub : [Issues](https://github.com/votre-username/exo7-site/issues)
