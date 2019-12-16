import React from 'react'

const NewTodoForm = ({ handleSubmit, updateTodoInput, todoInput }) => (
  <form onSubmit={handleSubmit}>
    <input
      onChange={updateTodoInput}
      placeholder='todo title'
      value={todoInput}
    />
    <button>ADD TODO</button>
  </form>
)

export default NewTodoForm
