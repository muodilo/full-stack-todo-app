import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  isLoading: false,
  isSuccess: false,
  isError:false
}

//register a user
export const register = createAsyncThunk('auth/register' ,async(userData,thunkAPI) => {
  console.log(userData)
})

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    
  }
})

export default authSlice.reducer