import React from 'react'
import { Link } from 'react-router-dom'

const TodoList = ({ todos, removeTodo }) => (
  <ul>
    {todos.map(todo => (
      <Link
        style={{ textDecoration: 'none', color: 'black' }}
        to={`/todos/${todo.id}`}
      >
        <li
          style={{ textDecoration: todo.completed ? 'line-through' : '' }}
          key={todo.id}
        >
          {todo.title}{' '}
          <button
            onClick={e => {
              e.stopPropagation()
              removeTodo(todo.id)
            }}
          >
            X
          </button>
        </li>
      </Link>
    ))}
  </ul>
)

export default TodoList
