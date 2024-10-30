import { LoginForm } from 'navigation/auth/Login';
import { GET_CURRENT_ATHENTICATION, LOGIN } from '../../services/CONSTANT'
import axios from '../../services/axiosInstance'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { UserData } from 'redux/user/userSlices';


export const registerUser = createAsyncThunk<UserData, { username: string; password: string }, { rejectValue: string }>(
  'user/register',
  async ({ username, password }: LoginForm, { rejectWithValue }) => {
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

export const registerMe = createAsyncThunk<UserData, void, { rejectValue: string }>(
  'user/me',
  async ( _, { rejectWithValue }) => {
    try {
      const config = {
        headers: {
          'Content-Type': 'application/json',
        },
      }
      const response = await axios.get<UserData>(
        GET_CURRENT_ATHENTICATION,
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