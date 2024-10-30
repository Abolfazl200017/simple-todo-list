import { ActionReducerMapBuilder, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerMe, registerUser } from './userThunks';
import { setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from '../../utils/localStorage';

export type UserData = {
  id: number;
  username: string;
  email?: string;
  firstName: string;
  lastName: string;
  gender?: 'male' | 'female';
  img?: string;
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
};

const initialState: UserState = {
  loading: true,
  error: null,
  userData: null,
  userToken: null,
  success: false,
};

const handlePending = (state: UserState) => {
  state.loading = true;
  state.error = null;
};

const handleFulfilled = (state: UserState, action: PayloadAction<UserData>) => {
  state.loading = false;
  state.success = true;
  state.userData = action.payload; // assuming action.payload is already of type UserData
  if (action.payload.accessToken) setAccessTokenToLocalStorage(action.payload.accessToken);
  if (action.payload.refreshToken) setRefreshTokenToLocalStorage(action.payload.refreshToken);
  console.log('state', state);
};

const handleRejected = (state: UserState, action: PayloadAction<string | undefined>) => {
  state.loading = false;
  state.error = action.payload || 'Unknown error';
  state.success = false;
};

export const userSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    resetUserState: (state) => {
      state.error = null;
      state.loading = false;
      state.userData = null;
      state.userToken = null;
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
export const { resetUserState } = userSlice.actions;
export { registerUser };

export default userSlice.reducer;
