# Guide de contribution

Ce guide vous explique comment ajouter ou modifier du contenu sur le site Exo7.

## 📝 Format des fichiers Markdown

Tous les contenus sont écrits en Markdown avec un **frontmatter** YAML en début de fichier.

### Structure d'un fichier de cours

```markdown
---
title: "Titre du cours"
niveau: "L1"  # ou L2, L3
ordre: 1      # Ordre d'affichage (facultatif)
description: "Description courte"
---

## Description

Texte de description du cours...

## Ressources disponibles

### Livre (PDF)
- [Télécharger le livre (PDF)](http://example.com/livre.pdf)
- [Livre sur Amazon](https://amazon.fr/...)

### Corrections
- [Télécharger les corrections (PDF)](http://example.com/corrections.pdf)

### Vidéos
- [Playlist YouTube](https://youtube.com/...)

## Table des matières

1. Chapitre 1
2. Chapitre 2
...
```

## 📂 Organisation des fichiers

### Cours (`content/cours/`)

Nommez les fichiers selon ce pattern : `nomducours-niveau.md`

Exemples :
- `algebre-l1.md`
- `analyse-l2.md`
- `geometrie-l3.md`

### Vidéos (`content/videos/`)

Créez un fichier par niveau ou par thème :
- `videos-l1.md`
- `videos-analyse.md`

### QCM (`content/qcm/`)

Fichiers pour les questionnaires :
- `qcm-l1.md`
- `qcm-probabilites.md`

### Activités (`content/activites/`)

Fichiers pour les activités pédagogiques :
- `scratch.md`
- `python.md`

### Pages statiques (`content/pages/`)

Pages d'information :
- `auteurs.md`
- `a-propos.md`

## ✏️ Comment ajouter un nouveau cours

### Option 1 : Via l'interface GitHub (recommandé pour débutants)

1. Allez sur GitHub dans le dossier `content/cours/`
2. Cliquez sur "Add file" > "Create new file"
3. Nommez le fichier (ex: `probabilites-l2.md`)
4. Copiez le template ci-dessus et remplissez-le
5. Cliquez sur "Commit changes"
6. Le site sera automatiquement mis à jour en 1-2 minutes

### Option 2 : En local (recommandé pour contributeurs réguliers)

1. Clonez le repository :
```bash
git clone https://github.com/votre-username/exo7-site.git
cd exo7-site
```

2. Créez une nouvelle branche :
```bash
git checkout -b ajout-cours-probabilites
```

3. Créez le fichier dans `content/cours/probabilites-l2.md`

4. Testez en local :
```bash
npm run dev
```
Visitez `http://localhost:5173` pour vérifier

5. Commitez et pushez :
```bash
git add content/cours/probabilites-l2.md
git commit -m "Ajout du cours de probabilités L2"
git push origin ajout-cours-probabilites
```

6. Créez une Pull Request sur GitHub

## 🔗 Liens vers des ressources externes

Les PDFs et autres fichiers doivent être hébergés **ailleurs** (pas dans ce repository) :
- Sur le serveur Exo7 actuel
- Sur Google Drive / Dropbox
- Sur Amazon pour les livres

Utilisez toujours des **liens absolus** :
```markdown
✅ [Télécharger](http://exo7.emath.fr/livre.pdf)
❌ [Télécharger](../files/livre.pdf)
```

## 🎨 Mise en forme du texte

Le Markdown supporte :

```markdown
# Titre de niveau 1
## Titre de niveau 2
### Titre de niveau 3

**Texte en gras**
*Texte en italique*

- Liste à puces
- Item 2

1. Liste numérotée
2. Item 2

[Lien](https://example.com)
```

## 🖼️ Ajouter des images

1. Placez l'image dans le dossier `static/images/`
2. Référencez-la dans le Markdown :

```markdown
![Description](../images/nom-image.png)
```

## ✅ Checklist avant de soumettre

- [ ] Le frontmatter YAML est correct
- [ ] Le fichier est bien nommé (minuscules, tirets)
- [ ] Les liens externes fonctionnent
- [ ] Le niveau (L1/L2/L3) est correct
- [ ] Le texte est relu (orthographe, grammaire)
- [ ] Le site a été testé en local (si possible)

## 🐛 Signaler un problème

Si vous trouvez une erreur dans le contenu :
1. Ouvrez une [issue sur GitHub](https://github.com/votre-username/exo7-site/issues)
2. Décrivez précisément le problème
3. Indiquez la page concernée

## ❓ Besoin d'aide ?

- Consultez la [documentation Markdown](https://www.markdownguide.org/basic-syntax/)
- Regardez les fichiers existants comme exemples
- Ouvrez une issue pour poser une question

## 👥 Processus de validation

1. Vous créez une Pull Request
2. Un mainteneur revoit les changements
3. Des corrections sont demandées si nécessaire
4. La PR est mergée dans `main`
5. Le site est automatiquement déployé

Merci de votre contribution ! 🙏
