// jest.config.js
module.exports = {
  // Point de départ de la résolution : votre monorepo racine
  rootDir: '.',

  // Où Jest va chercher le code et les tests
  roots: [
    '<rootDir>/frontend/src',         // votre code source React
    '<rootDir>/tests/unitaires'       // vos tests unitaires
  ],

  // Extensions de fichiers à reconnaître
  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  // Pour que Jest trouve react et les autres dépendances du frontend
  moduleDirectories: [
    'node_modules',
    '<rootDir>/frontend/node_modules'
  ],

  // Patterns pour détecter les fichiers de test
  testMatch: [
    '**/*.test.js',
    '**/*.spec.js'
  ],

  // Utiliser Babel pour transformer JSX/ES6
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },

  // Environnement de test (DOM)
  testEnvironment: 'jsdom',

  // Ignorer node_modules à la racine
  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  // (Optionnel) couverture de code
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov']
};
