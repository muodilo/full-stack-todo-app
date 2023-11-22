import React, { useState,useEffect } from 'react'
import {toast } from 'react-toastify';
import { useSelector, useDispatch } from 'react-redux'
import {useNavigate,Link} from 'react-router-dom'
import {login,reset} from '../features/auth/authSlice'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })
  const { email, password } = formData
  const {user,isLoading,isSuccess,isError,message} = useSelector(state=>state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (user || isSuccess) {
      navigate('/my-todos');
    }
    if (isError) {
      toast.error(message);
    }
    return () => {
      dispatch(reset());
    };
  }, [user, isSuccess, isError, message, navigate, dispatch]); 

  const onChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      email,
      password
    }

    dispatch(login(userData))

  }
  return (
    <div className='container-fluid main-form '>
      <div className="register p-3 rounded bg-body-secondary">
        <section className="header text-center pb-4">
          <h1>Sign in</h1>
          <hr />
        </section>
        <div className="form p-3 rounded">
          <form onSubmit={onSubmit}>

            <input
              type="email"
              className="form-control mb-3"
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={onChange}
              required
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder='Create password'
              name='password'
              value={password}
              onChange={onChange}
              required
              autoComplete='true'
            />

            <button type="submit" className='btn btn-primary w-100'>Login</button>
          </form>
          <div className='text-center m-3'>
            <p className='text-white'>Don’t have an account?  <Link to='/sign-up'>Sign Up</Link></p>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login