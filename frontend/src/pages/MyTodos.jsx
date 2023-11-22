import React,{useEffect,useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toast } from 'react-toastify';
import { fetchTodos,createTodo, reset } from '../features/todos/todoSlice'
import TodoItem from './TodoItem';

function MyTodos() {
  const { todos, isLoading, isError, isSuccess, message } = useSelector(state => state.todo)
  const { user } = useSelector(state => state.auth)
  const dispatch = useDispatch()

  const [text, setText] = useState('')

  const onChange = (e) => {
    setText(e.target.value)
  }
  const onSubmit = async (e) => {
    e.preventDefault();
    const data = { text };
  
    try {
      await dispatch(createTodo(data));
      // Only fetch todos and reset if createTodo is successful
      dispatch(fetchTodos());
      dispatch(reset());
    } catch (error) {
      // Handle errors, and toast.error if isError
      if (isError) {
        toast.error(message);
      }
    }
    setText('')
  };
  

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

  
  // if (isLoading) {
  //   return <h1>Loading....</h1>
  // }
  
  return (
    <div className='todo-container pb-5'>
      <section className="title text-center w-100 pt-3 ">
        {user?<h2 className='text-white'>Welcome {user.name.charAt(0).toUpperCase() + user.name.slice(1)} </h2>:null}
        <hr className='text-white'/>
      </section>
      <div className="container-sm bg-body-secondary rounded p-2">
        <div className="todo-form">
          <form onSubmit={onSubmit}>
            <div className="input-group">
              <input type="text" className="form-control" value={text} onChange={onChange} required/>
              <button type="submit" className='btn btn-primary'>Add</button>
            </div>
          </form>
          <ul className="list-group mt-4 todos-ul">
          {todos.map((todo)=> (
            <TodoItem key={todo._id} todo={todo} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default MyTodos