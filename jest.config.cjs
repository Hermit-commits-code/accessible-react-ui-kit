module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: [
    '@testing-library/jest-dom',
    'jest-axe/extend-expect',
    '<rootDir>/jest.setup.js',
  ],
  moduleFileExtensions: ['js', 'jsx'],
  testMatch: ['<rootDir>/src/components/**/*.test.{js,jsx}'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
