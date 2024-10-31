import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerMe, registerUser } from './userThunks';
import { removeAccessTokenFromLocalStorage, removeRefreshTokenFromLocalStorage, setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from 'utils/localStorage';

export type UserData = {
  id: number;
  username: string;
  email?: string;
  firstName: string;
  lastName: string;
  gender?: 'male' | 'female';
  image?: string;
  accessToken: string;
  refreshToken: string;
};

export type UserState = {
  loading: boolean;
  error: Error | null | unknown;
  userData: UserData | null;
  userToken: null | {
    accessToken: string;
    refreshToken: string;
  };
  success: boolean;
  initialized: boolean;
};

const initialState: UserState = {
  loading: true,
  error: null,
  userData: null,
  userToken: null,
  success: false,
  initialized: false,
};

const handlePending = (state: UserState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: UserState, action: PayloadAction<UserData>) => {
  state.loading = false;
  state.success = true;
  state.userData = action.payload; // assuming action.payload is already of type UserData
  state.initialized = true;
  if (action.payload.accessToken) setAccessTokenToLocalStorage(action.payload.accessToken);
  if (action.payload.refreshToken) setRefreshTokenToLocalStorage(action.payload.refreshToken);
};

const handleRejected = (state: UserState, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || 'Unknown error';
  state.success = false;
  state.initialized = true;
};

export const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {
    setStateForUnknownToken: (state) => {
      state.error = null;
      state.loading = false;
      state.userData = null;
      state.userToken = null;
      state.initialized = true;
    },
    resetUserState: (state) => {
      removeAccessTokenFromLocalStorage()
      removeRefreshTokenFromLocalStorage()
      state.userData = null;
      state.userToken = null;
      state.success = false
    },
  },
  extraReducers: (builder: ActionReducerMapBuilder<UserState>) => {
    //register user
    builder
      //register with login
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, handleFulfilled)
      .addCase(registerUser.rejected, handleRejected)

      //register with token
      .addCase(registerMe.pending, handlePending)
      .addCase(registerMe.fulfilled, handleFulfilled)
      .addCase(registerMe.rejected, handleRejected);
  },
});

// Action creators are generated for each case reducer function
export const { resetUserState, setStateForUnknownToken } = userSlice.actions;
export { registerUser };

export default userSlice.reducer;
