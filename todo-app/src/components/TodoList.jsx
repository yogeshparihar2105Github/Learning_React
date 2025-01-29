import React from 'react'

function TodoList() {
  return (
    <li className="todo-item">
        <span>
            <input type="checkbox"></input>
            <span>Eat</span>
        </span>
        <p>...</p>
    </li>
  )
}

export default TodoList