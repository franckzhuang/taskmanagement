module.exports = {
  roots: ['../../tests/unitaires'], 
  transform: {
    '^.+\.(js|jsx)$': 'babel-jest',
  },
  testEnvironment: 'jsdom',
};