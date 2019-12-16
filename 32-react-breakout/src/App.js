import React from 'react'
import './App.css'

class App extends React.Component {
  todoId = 3

  state = {
    todos: [
      { id: 1, title: 'buy milk' },
      { id: 2, title: 'cook dinner' },
      { id: 3, title: 'conquer the world' }
    ],
    todoInput: ''
  }

  updateTodoInput = e => {
    this.setState({ todoInput: e.target.value })
  }

  addTodo = title => {
    const newTodo = { id: ++this.todoId, title }
    this.setState({ todos: [newTodo, ...this.state.todos] })
  }

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addTodo(this.state.todoInput)
  }

  render () {
    const { todos } = this.state
    return (
      <div className='App'>
        <h1>Todo App</h1>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.updateTodoInput} placeholder='todo title' />
          <button>ADD TODO</button>
        </form>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default App
