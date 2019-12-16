import React from 'react'

const TodoList = ({ todos, removeTodo, toggleComplete }) => (
  <ul>
    {todos.map(todo => (
      <li
        style={todo.completed ? { textDecoration: 'line-through' } : null}
        key={todo.id}
        onClick={() => toggleComplete(todo.id)}
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
    ))}
  </ul>
)

export default TodoList
