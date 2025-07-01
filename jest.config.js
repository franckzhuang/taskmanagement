module.exports = {
  rootDir: '.',

  roots: [
    '<rootDir>/frontend/src',         
    '<rootDir>/tests/unitaires'     
  ],

  moduleFileExtensions: ['js', 'jsx', 'json', 'node'],

  moduleDirectories: [
    'node_modules',
    '<rootDir>/frontend/node_modules'
  ],

  testMatch: [
    '**/*.test.js',
    '**/*.spec.js'
  ],

  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },

  testEnvironment: 'jsdom',

  testPathIgnorePatterns: [
    '/node_modules/'
  ],

  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['text', 'lcov']
};
