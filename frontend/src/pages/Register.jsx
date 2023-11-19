import React from 'react'

function Register() {
  return (
    <div className='container-fluid main-form bg-body-secondary'>
      <div className="register p-3 rounded">
        <section className="header text-center pb-4">
          <h1>Register</h1>
          <hr />
        </section>
        <div className="form">
          <form>
            <input
              type="text"
              className="form-control mb-3"
              placeholder='Enter your name'
              
            />
            <input
              type="email"
              className="form-control mb-3"
              placeholder='Enter your email'

            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder='Create password'

            />
            <input
              type="password"
              className="form-control mb-3"
              placeholder='Confirm password'

            />
            <button type="submit" className='btn btn-primary w-100'>Submit</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Register