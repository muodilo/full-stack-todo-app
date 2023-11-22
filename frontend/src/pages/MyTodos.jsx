import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toast } from 'react-toastify';
import { fetchTodos, reset } from '../features/todos/todoSlice'
import TodoItem from './TodoItem';

function MyTodos() {
  const { todos, isLoading, isError, isSuccess, message } = useSelector(state => state.todo)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  useEffect(() => {
    return () => {
      if (isSuccess) {
        dispatch(reset())
      }
    }
  },[dispatch,isSuccess])

  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch]);
  
  if (isLoading) {
    return <h1>Loading....</h1>
  }
  
  return (
    <div className='todo-container'>
      <section className="title text-center w-100 pt-3">
        {user?<h2 className='text-white'>Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1)} </h2>:null}
        <hr className='text-white'/>
      </section>
      <div className="container-sm bg-body-secondary rounded p-2">
        <div className="todo-form">
          <form >
            <div className="input-group">
              <input type="text" className="form-control" />
              <button type="submit" className='btn btn-primary'>Add</button>
            </div>
          </form>
          <ul className="list-group mt-4 todos-ul">
          {todos.map(todo => (
            <TodoItem key={todo.id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyTodos