import Login from '@navigation/auth/Login';
import '@testing-library/jest-dom'
import { render } from '@testing-library/react';
import AppProviders from '../../contexts/AppProvider';

test("Renders the main page", () => {
  render(
    <AppProviders>
      <Login />
    </AppProviders>
  )
  expect(true).toBeTruthy()
})