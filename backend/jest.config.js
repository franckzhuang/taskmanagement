// backend/jest.config.js
const path = require('path');

module.exports = {
  rootDir: path.resolve(__dirname),
  testMatch: ['<rootDir>/tests/**/*.test.js'],
  testEnvironment: 'node',
  verbose: true,
};
