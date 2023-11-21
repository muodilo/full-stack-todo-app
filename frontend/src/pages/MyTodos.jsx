import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


function MyTodos() {
  const { user } = useSelector(state => state.auth)

  return (
    <div className='main'>
      <section className="title text-center w-100 pt-3">
        {user?<h2>Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1)} </h2>:null}
        
        <hr />
      </section>
      
    </div>
  )
}

export default MyTodos