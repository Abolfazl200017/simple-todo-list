import userReducer, { resetUserState, setStateForUnknownToken, UserState } from '../../redux/user/userSlices';
import { registerUser, registerMe } from '../../redux/user/userThunks';
import { PayloadAction } from '@reduxjs/toolkit';

jest.mock('../../utils/localStorage', () => ({
  setAccessTokenToLocalStorage: jest.fn(),
  setRefreshTokenToLocalStorage: jest.fn(),
  removeAccessTokenFromLocalStorage: jest.fn(),
  removeRefreshTokenFromLocalStorage: jest.fn(),
}));

describe('userSlice', () => {
  const initialState: UserState = {
    loading: true,
    error: null,
    userData: null,
    userToken: null,
    success: false,
    initialized: false,
  };

  it('should handle initial state', () => {
    expect(userReducer(undefined, { type: 'unknown' })).toEqual(initialState);
  });

  it('should handle setStateForUnknownToken reducer', () => {
    const state = userReducer(initialState, setStateForUnknownToken());
    expect(state).toEqual({
      ...initialState,
      loading: false,
      initialized: true,
    });
  });

  it('should handle resetUserState reducer', () => {
    const stateWithUserData: UserState = {
      ...initialState,
      userData: null,
      userToken: null,
      success: false,
    };
    const state = userReducer(stateWithUserData, resetUserState());
    expect(state).toEqual({
      ...initialState,
      loading: true,
      initialized: false,
    });
  });

  describe('extraReducers', () => {
    it('should handle registerUser.pending', () => {
      const action = { type: registerUser.pending.type };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should handle registerUser.fulfilled', () => {
      const userData = {
        id: 1,
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        accessToken: 'token123',
        refreshToken: 'refresh123',
      };
      const action: PayloadAction<typeof userData> = {
        type: registerUser.fulfilled.type,
        payload: userData,
      };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.success).toBe(true);
      expect(state.userData).toEqual(userData);
      expect(state.initialized).toBe(true);
    });

    it('should handle registerUser.rejected', () => {
      const error = 'Failed to register';
      const action: PayloadAction<string> = { type: registerUser.rejected.type, payload: error };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
      expect(state.success).toBe(false);
      expect(state.initialized).toBe(true);
    });

    it('should handle registerMe.pending', () => {
      const action = { type: registerMe.pending.type };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(true);
      expect(state.error).toBeNull();
    });

    it('should handle registerMe.fulfilled', () => {
      const userData = {
        id: 1,
        username: 'testuser',
        firstName: 'Test',
        lastName: 'User',
        accessToken: 'token123',
        refreshToken: 'refresh123',
      };
      const action: PayloadAction<typeof userData> = {
        type: registerMe.fulfilled.type,
        payload: userData,
      };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.success).toBe(true);
      expect(state.userData).toEqual(userData);
      expect(state.initialized).toBe(true);
    });

    it('should handle registerMe.rejected', () => {
      const error = 'Failed to authenticate';
      const action: PayloadAction<string> = { type: registerMe.rejected.type, payload: error };
      const state = userReducer(initialState, action);
      expect(state.loading).toBe(false);
      expect(state.error).toBe(error);
      expect(state.success).toBe(false);
      expect(state.initialized).toBe(true);
    });
  });
});

test('placeholder test', () => {
  expect(true).toBe(true);
});