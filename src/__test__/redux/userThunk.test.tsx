// userThunks.test.ts
import { registerUser, registerMe } from '../../redux/user/userThunks';
import { UserData } from 'redux/user/userSlices';
import axios from '../../services/axiosInstance';
import axiosMock from 'axios-mock-adapter';
import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../../redux/user/userSlices';
import { GET_CURRENT_ATHENTICATION, LOGIN } from '../../services/CONSTANT';

const mock = new axiosMock(axios);

describe('userThunks', () => {

  afterEach(() => {
    mock.reset();
  });

  describe('registerUser', () => {
    it('dispatches fulfilled action and returns user data on success', async () => {
      const mockUserData: UserData = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        gender: 'male',
        image: 'http://example.com/image.png',
        accessToken: 'fake-access-token',
        refreshToken: 'fake-refresh-token',
      };

      mock.onPost(LOGIN).reply(200, mockUserData);

      const store = configureStore({ reducer: { user: userReducer } });

      const result = await store.dispatch(registerUser({ username: 'emilys', password: 'emilyspass' }));

      expect(result.type).toBe('user/register/fulfilled');
      expect(result.payload).toEqual(mockUserData);
    });

    it('dispatches rejected action and returns error message on failure', async () => {
      const errorMessage = 'Invalid credentials';

      mock.onPost(LOGIN).reply(400, { message: errorMessage });

      const store = configureStore({ reducer: { user: userReducer } });

      const result = await store.dispatch(registerUser({ username: 'testuser', password: 'wrongpassword' }));

      expect(result.type).toBe('user/register/rejected');
      expect(result.payload).toBe(errorMessage);
    });
  });

  describe('registerMe', () => {
    it('dispatches fulfilled action and returns user data on success', async () => {
      const mockUserData: UserData = {
        id: 1,
        username: 'testuser',
        email: 'test@example.com',
        firstName: 'Test',
        lastName: 'User',
        gender: 'male',
        image: 'http://example.com/image.png',
        accessToken: 'fake-access-token',
        refreshToken: 'fake-refresh-token',
      };

      mock.onGet(GET_CURRENT_ATHENTICATION).reply(200, mockUserData);

      const store = configureStore({ reducer: { user: userReducer } });

      const result = await store.dispatch(registerMe());

      expect(result.type).toBe('user/me/fulfilled');
      expect(result.payload).toEqual(mockUserData);
    });

    it('dispatches rejected action and returns error message on failure', async () => {
      const errorMessage = 'Unauthorized';
      
      mock.onGet(GET_CURRENT_ATHENTICATION).reply(401, { message: errorMessage });

      const store = configureStore({ reducer: { user: userReducer } });

      const result = await store.dispatch(registerMe());

      expect(result.type).toBe('user/me/rejected');
      expect(result.payload).toBe(errorMessage);
    });
  });
});
