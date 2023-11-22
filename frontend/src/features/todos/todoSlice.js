import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import todoService from './todoService'


const initialState = {
  todos: [],
  isLoading: false,
  isError: false,
  isSuccess: false,
  message:''
}

//create todo
export const createTodo = createAsyncThunk('todo/createTodo', async (text, thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.createTodos(text,token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//fetch todos
export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_,thunkAPI) => {
  try {
    const token = thunkAPI.getState().auth.user.token
    return await todoService.fetchTodos(token)
  } catch (error) {
    const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
    return thunkAPI.rejectWithValue(message)
  }
})

//delete Todos
export const deleteTodo = createAsyncThunk('todo/deleteTodo', async (id, thunkAPI) => {
  const token = thunkAPI.getState().auth.user.token
  try {
    return await todoService.deleteTodo(id,token)
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
      .addCase(createTodo.pending, (state) => {
        state.isLoading = true
      })
      .addCase(createTodo.fulfilled, (state,action) => {
        state.isLoading = false
        state.isSuccess = true
      })
      .addCase(createTodo.rejected, (state, action) => {
        state.isLoading = false
        state.isError = true
        state.message = action.payload
      })
  }
})

export const {reset} = todoSlice.actions
export default todoSlice.reducer
