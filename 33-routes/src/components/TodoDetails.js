import React from 'react'

const TodoDetails = ({ todo }) => {
  return (
    <div>
      <h2>{todo.title}</h2>
      <p>Completed: {todo.completed ? 'YAY' : 'NAY'}</p>
      <p>Belongs to user: {todo.userId}</p>
      {/* <button onClick={deselectTodo}>BACK</button> */}
    </div>
  )
}

export default TodoDetails
