module.exports = {
  roots: ['<rootDir>/frontend/src', '<rootDir>/tests/unitaires'],
  testEnvironment: 'jsdom',
  testMatch: ['**/?(*.)+(test|spec).[jt]s?(x)'],
  transform: { '^.+\.(js|jsx)$': 'babel-jest' },
  moduleNameMapper: { '\\.(css|scss|svg)$': 'identity-obj-proxy' },
  moduleDirectories: ['node_modules','<rootDir>/frontend/node_modules']
};
