import React, { useState,useEffect } from 'react'
import { FaEdit } from "react-icons/fa";
import {toast } from 'react-toastify';
import { deleteTodo,fetchTodos ,updateTodo, reset} from '../features/todos/todoSlice';
import { useDispatch,useSelector} from 'react-redux'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const id = todo._id
  let data
  const [isEditing, setIsEditing] = useState(false)

  const initialText = todo.text
  const [text, setText] = useState(initialText)
  const { todos, isLoading, isError, isSuccess, message,updated } = useSelector(state => state.todo)

  const handleClick = () => {
    setIsEditing(true)
  }

  useEffect(() => {
    console.log(isEditing); // This will reflect the updated value
  }, [isEditing]);

  const handleCheckboxChange = async(e) => {
    // Access the checked property to get the current state of the checkbox
    const isChecked = e.target.checked;
  
    // Perform actions based on the checkbox state
    if (isChecked && window.confirm('Are you sure you want to delete this item?')) {
      try {
        console.log("Checkbox is checked");
        await dispatch(deleteTodo(id))
        dispatch(fetchTodos())
        dispatch(reset())
        
      } catch (error) {
        console.log(error)
      }
      // Checkbox is checked
      // Perform additional actions as needed
    }
  };

  const onChange = (e) => {
    setText(e.target.value)
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    data = text
  };
  // if (isEditing) {
  //   return (<>
  //         <form onSubmit={onSubmit} className='mb-2'>
  //           <div className="input-group">
  //             <input type="text" className="form-control" value={text} onChange={onChange} required/>
  //             <button type="submit" className='btn btn-primary'>Edit</button>
  //           </div>
  //         </form>
  //   </>)
  // }
  
  return (
    <>
      <li className="list-group-item list-group-item-dark mb-2">
        <div>
          <input className="form-check-input me-1 " type="checkbox" value="" id="firstCheckbox" onChange={handleCheckboxChange}/>
          {todo.text}
        </div>
        {/* <div onClick={handleClick} className='edit-btn'>
          <FaEdit/>
        </div> */}
        
      </li>
    </>
  )
}

export default TodoItem