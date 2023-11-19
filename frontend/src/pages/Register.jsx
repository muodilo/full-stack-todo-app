import React, { useState } from 'react'
import {toast } from 'react-toastify';
import {useSelector,useDispatch} from 'react-redux'
import {register} from '../features/auth/authSlice'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2:'',
  })
  const { name, email, password, password2 } = formData
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]:e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
    if (password === password2) {
      const userData = {
        name,
        email,
        password
      }
      dispatch(register(userData))
    } else {
      toast.error('Password do not match');
    }
  }
  
  return (
    <div className='container-fluid main-form bg-body-secondary'>
      <div className="register p-3 rounded">
        <section className="header text-center pb-4">
          <h1>Register</h1>
          <hr />
        </section>
        <div className="form">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              className="form-control mb-3"
              placeholder='Enter your name'
              name='name'
              value={name}
              onChange={onChange}
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder='Enter your email'
              name='email'
              value={email}
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder='Create password'
              name='password'
              value={password}
              onChange={onChange}
            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder='Confirm password'
              name='password2'
              value={password2}
              onChange={onChange}
            />
            <button type="submit" className='btn btn-primary w-100'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register