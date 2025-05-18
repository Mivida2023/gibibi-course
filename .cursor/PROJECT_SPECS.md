# Spécifications Techniques du Projet Gibibi Course

## Présentation Générale

Gibibi Course est une application web éducative présentant une feuille de route d'apprentissage pour les développeurs, depuis les bases du web jusqu'à l'intelligence artificielle.

## Stack Technique

### Frontend
- **Framework** : Next.js 15.3
- **Langage** : TypeScript
- **UI/CSS** : 
  - Tailwind CSS v4
  - Shadcn/UI (composants basés sur Radix UI)
- **Thème** : Support des thèmes clair/sombre via next-themes

### Structure du Projet
- Architecture App Router de Next.js
- Organisation des composants modulaire
- Support des styles adaptifs (responsive design)

### Fonctionnalités Principales
1. **Affichage de la Roadmap** : Présentation d'un parcours d'apprentissage structuré en phases et sous-sections
2. **Navigation Interactive** : Expansion/réduction des sections à la demande
3. **Toggle de Thème** : Possibilité de basculer entre thème clair et sombre
4. **Design Responsive** : Adaptation à tous les appareils

### Détails Techniques
- Utilisation de React Hooks (useState) pour la gestion d'état locale
- Composants client ("use client") pour les fonctionnalités interactives
- Intégration de la gestion de thème via ThemeProvider
- Structure visuelle avec header et footer
- Système de couleurs adaptatif selon le thème 