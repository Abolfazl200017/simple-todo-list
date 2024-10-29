import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/userAction'
import { setAccessTokenToLocalStorage, setRefreshTokenToLocalStorage } from '../../utils/localStorage'

export type UserData = {
    id: number,
    username: string,
    email?: string,
    firstName: string,
    lastName: string,
    gender?: 'male' | 'female',
    img?: string,
    accessToken: string,
    refreshToken: string,
}

export type UserState = {
    loading: boolean,
    error: Error|null|unknown,
    userData: UserData | null,
    userToken: null | {
        accessToken: string,
        refreshToken: string,
    },
    success: boolean,
}

const initialState: UserState = {
    loading: true,
    error: null,
    userData: null,
    userToken: null,
    success: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
   //register user
    builder
        .addCase(registerUser.pending, (state) => {
            state.loading = true
            state.error = null
        })
        .addCase(registerUser.fulfilled, (state, action) => {
            state.loading = false
            state.success = true
            state.userData = <UserData>action.payload
            setAccessTokenToLocalStorage(action.payload.accessToken)
            setRefreshTokenToLocalStorage(action.payload.refreshToken)
        })
        .addCase(registerUser.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            state.success = false
        })
  }
})

// Action creators are generated for each case reducer function
export { registerUser }

export default counterSlice.reducer