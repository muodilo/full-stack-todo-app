import axios from 'axios'
const API_URL = 'http://localhost:5000/api/todos'

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

const todoService = {
  fetchTodos
}

export default todoService
