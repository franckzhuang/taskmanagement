# taskmanagement
Application de gestion de tâches

# taskmanagement
Application de gestion de tâches

# Gestionnaire de Tâches Collaboratif

Ce projet est une application web de gestion de tâches en équipe. Elle permet de créer, assigner, modifier et suivre des tâches avec système de priorité, de statut, et d'authentification sécurisée.

---

## Fonctionnalités

- Authentification (register / login)
- Création, modification et suppression de tâches
- Attribution à un utilisateur
- Priorité (basse, moyenne, haute) et statut (à faire, en cours, terminé)
- Interface responsive (React)
- API REST protégée par JWT

---

## Lancer les tests

### Test integration

```bash
cd backend
npm test


### Test E2E

```bash
cd backend
NODE_PATH=./node_modules npx jest ../tests/e2e/login.test.js --config jest.config.js