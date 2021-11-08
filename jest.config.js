/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

module.exports = {
  globals: {
    'ts-jest': {
      tsconfig: path.resolve(__dirname, 'tsconfig.json'),
    },
  },
  moduleFileExtensions: ['ts', 'js'],
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },
  collectCoverage: true,
  coverageDirectory: 'tests/coverage',
  collectCoverageFrom: ['src/**/*'],
  testPathIgnorePatterns: ['dist/'],
  testMatch: ['**/*.test.ts'],
  testEnvironment: 'node',
};
