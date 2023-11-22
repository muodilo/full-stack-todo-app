import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'


const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message:''
}


export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.fetchTodos(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.isLoading = true
      })
      .addCase(fetchTodos.fulfilled, (state,action) => {
        state.isLoading = false
        state.isSuccess = true
        state.todos = action.payload
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer
