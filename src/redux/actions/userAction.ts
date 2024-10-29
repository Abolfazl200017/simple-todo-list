import { LOGIN } from '../../services/CONSTANT'
import axios from '../../services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserData } from 'redux/slices/userSlice';


export const registerUser = createAsyncThunk(
  'auth/register',
  async ({ username, password }: { username: string; password: string }, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.post<UserData>(
        LOGIN,
        { username, password },
        config
      )
      return response.data
    } catch (error) {
    // return custom error message from backend if present
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message)
      } else {
        return rejectWithValue(error.message)
      }
    }
  }
)