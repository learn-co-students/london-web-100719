import React from 'react'
import './App.css'
import NewTodoForm from './components/NewTodoForm'
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    todos: [],
    todoInput: 'howdy'
  }

  toggleComplete = id => {
    const todos = this.state.todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    )

    //  state = [1,2,3,4]  << 5
    //  newState = [1,2,7,4] << 6
    this.setState({ todos })
  }

  getTodos = () => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(todos => this.setState({ todos }))
  }

  updateTodoInput = e => {
    this.setState({ todoInput: e.target.value })
  }

  addTodo = title => {
    const newTodo = { id: this.state.todos.length + 1, title, completed: false }
    this.setState({
      todos: [newTodo, ...this.state.todos],
      todoInput: ''
    })
  }

  removeTodo = id => {
    const todos = this.state.todos.filter(todo => todo.id !== id)
    this.setState({ todos })
  }

  handleSubmit = e => {
    e.preventDefault()
    this.addTodo(this.state.todoInput)
  }

  componentDidMount () {
    this.getTodos()
  }

  render () {
    console.log('app rendered with state:', this.state)
    const { todos, todoInput } = this.state
    const { removeTodo, handleSubmit, updateTodoInput, toggleComplete } = this
    return (
      <div className='App'>
        <h1>Todo App</h1>
        <NewTodoForm
          handleSubmit={handleSubmit}
          todoInput={todoInput}
          updateTodoInput={updateTodoInput}
        />
        <TodoList
          toggleComplete={toggleComplete}
          todos={todos}
          removeTodo={removeTodo}
        />
      </div>
    )
  }
}

export default App
