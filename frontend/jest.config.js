module.exports = {
  roots: ['../../tests/unitaires'], // <-- chemin relatif vers la racine depuis frontend/
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};