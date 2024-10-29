import { createSlice } from '@reduxjs/toolkit'
import { registerUser } from '../actions/userAction'

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
    error: Error|null,
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
            state.userData = <UserData>action.payload
        })
        .addCase(registerUser.rejected, (state) => {
            state.loading = true
            state.error = null
        })
  }
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export default counterSlice.reducer