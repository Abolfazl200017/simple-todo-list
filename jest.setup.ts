Object.defineProperty(global, 'createContext', {
  value: jest.fn().mockImplementation(() => ({
    Provider: ({ children }) => children,
    Consumer: ({ children }) => children,
  })),
});

Object.defineProperty(global, 'useContext', {
  value: jest.fn(),
});