export default {
  preset: 'ts-jest',
  testEnvironment: 'jest-environment-jsdom',
  transform: {
      '^.+\\.(ts|tsx)$': 'ts-jest',
      '^.+\\.css$': 'jest-css-modules-transform',
  // process `*.tsx` files with `ts-jest`
  },
  moduleNameMapper:   {
      '\\.(gif|ttf|eot|svg|png)$': '<rootDir>/src/test/__mocks__/fileMock.ts',
      '\\.(css|less|sass|scss)$': 'identity-obj-proxy',
      '^@utils/(.*)$': '<rootDir>/src/utils/$1',
      '^@navigation/(.*)$': '<rootDir>/src/navigation/$1',
      '^@components/(.*)$': '<rootDir>/src/components/$1',
      '^@layouts/(.*)$': '<rootDir>/src/layouts/$1',
      '^@config/(.*)$': '<rootDir>/src/config/$1',
      '^@pages/(.*)$': '<rootDir>/src/pages/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.ts'],
}