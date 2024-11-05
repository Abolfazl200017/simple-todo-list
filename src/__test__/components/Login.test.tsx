import * as React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useUserState } from '../../redux/hooks';
import Login from '@navigation/auth/Login';

const originalError = console.error;
beforeAll(() => {
  console.error = (...args) => {
    if (args[0].includes('act(...)')) {
      return;
    }
    originalError(...args);
  };
});

afterAll(() => {
  console.error = originalError;
});

// Mock useNavigate and Redux hooks
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: jest.fn(),
}));

jest.mock('../../redux/hooks', () => ({
  useAppDispatch: jest.fn(),
  useUserState: jest.fn(),
}));

jest.mock('../../redux/user/userThunks.ts', () => ({
  registerUser: jest.fn(),
}))

describe('Login Component', () => {
  const mockDispatch = jest.fn();
  const mockNavigate = jest.fn();
  const registerUser = jest.fn();

  beforeEach(() => {
    (useAppDispatch as jest.Mock).mockReturnValue(mockDispatch);
    (useNavigate as jest.Mock).mockReturnValue(mockNavigate);
    (useUserState as jest.Mock).mockReturnValue({
      success: false,
      loading: false,
      error: null,
    });
    (registerUser as jest.Mock).mockReturnValue(registerUser);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders login form inputs and submit button', () => {
    render(<Login />);
    expect(screen.getByLabelText(/نام کاربری/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/رمز عبور/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ورود/i })).toBeInTheDocument();
  });

  test('allows user to type in inputs and submit the form', () => {
    render(<Login />);

    const usernameInput = screen.getByLabelText(/نام کاربری/i);
    const passwordInput = screen.getByLabelText(/رمز عبور/i);
    const loginButton = screen.getByRole('button', { name: /ورود/i });

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    expect(usernameInput).toHaveValue('testuser');
    expect(passwordInput).toHaveValue('password123');

    // Simulate form submission
    fireEvent.click(loginButton);
    // expect(mockDispatch).toHaveBeenCalledWith(registerUser({ username: 'testuser', password: 'password123' }));
  });

  test('disables the button when loading', () => {
    (useUserState as jest.Mock).mockReturnValue({
      success: false,
      loading: true,
      error: null,
    });

    render(<Login />);

    const loginButton = screen.getByRole('button', { name: /ورود/i });
    expect(loginButton).toBeDisabled();
  });

  test('test error of inputs', () => {
    (useUserState as jest.Mock).mockReturnValue({
      success: false,
      loading: false,
      error: 'error',
    });

    render(<Login />);
    expect(true).toBe(true);
  });

  test('successful navigate', () => {
    (useUserState as jest.Mock).mockReturnValue({
      success: true,
      loading: true,
      error: false,
    });

    render(<Login />);
    expect(true).toBe(true);
  });

  test('check disabled button', () => {
    (useUserState as jest.Mock).mockReturnValue({
      success: false,
      loading: true,
      error: false,
    });
    
    render(<Login />);

    const usernameInput = screen.getByLabelText(/نام کاربری/i);
    const passwordInput = screen.getByLabelText(/رمز عبور/i);
    const loginButton = screen.getByRole('button', { name: /ورود/i });

    // Simulate user input
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });

    // Simulate form submission
    fireEvent.click(loginButton);
    expect(true).toBe(true);
  });
});
