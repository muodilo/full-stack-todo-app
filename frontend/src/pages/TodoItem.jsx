import React from 'react'

const TodoItem = ({todo}) => {
  return (
    <>
      <li className="list-group-item list-group-item-dark mb-2">
        <input className="form-check-input me-1 " type="checkbox" value="" id="firstCheckbox" />
          {todo.text}
      </li>
    </>
  )
}

export default TodoItem