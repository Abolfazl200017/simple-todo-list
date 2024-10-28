import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export type UserData = {
    id: number,
    username: string,
}

export type UserState = {
    loading: boolean,
    error: Error|null,
    data: UserData|null,
}

const initialState: UserState = {
    loading: true,
    error: null,
    data: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    
  },
})

// Action creators are generated for each case reducer function
// export const {  } = counterSlice.actions

export default counterSlice.reducer