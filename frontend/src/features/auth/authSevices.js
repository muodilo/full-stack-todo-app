import axios from 'axios'

const API_URL = 'http://localhost:5000/api/users'
const LOGIN_API_URL = 'http://localhost:5000/api/users/login'

//register
const register = async (userData) => {

    const response = await axios.post(API_URL, userData)
    if (response.data) {
      localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

//login
const login = async (userData) => {
  const response = await axios.post(LOGIN_API_URL,userData)
  if (response.data) {
    localStorage.setItem('user',JSON.stringify(response.data))
  }
  return response.data
}


const logout = async () =>localStorage.removeItem('user')

const authService = {
  register,
  logout,
  login
}

export default authService