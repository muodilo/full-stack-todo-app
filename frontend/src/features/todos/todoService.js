import axios from 'axios'
const API_URL = 'http://localhost:5000/api/todos'

//create todos
const createTodos = async (text,token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`
    }
  }
  const response = await axios.post(API_URL, text, config)
  return response.data
}

//fetch todos
const fetchTodos = async (token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`
    }
  }
  const response = await axios.get(API_URL, config)
  return response.data
}

//deleteTodo
const deleteTodo = async (id,token) => {
  const config = {
    headers: {
      Authorization:`Bearer ${token}`
    }
  }
  const response = await axios.delete(`${API_URL}/${id}`,config)
}

const todoService = {
  fetchTodos,
  createTodos,
  deleteTodo
}

export default todoService
