import React, { useState } from 'react'
import { FaEdit } from "react-icons/fa";
import { deleteTodo,fetchTodos ,reset} from '../features/todos/todoSlice';
import {useDispatch} from 'react-redux'

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch()
  const id = todo._id
  const [isEditing,setIsEditing] = useState(false)
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
  
  return (
    <>
      <li className="list-group-item list-group-item-dark mb-2">
        <div>
          <input className="form-check-input me-1 " type="checkbox" value="" id="firstCheckbox" onChange={handleCheckboxChange}/>
          {todo.text}
        </div>
        <div>
          <FaEdit/>
        </div>
        
      </li>
    </>
  )
}

export default TodoItem