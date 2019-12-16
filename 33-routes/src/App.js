import React from 'react'
import './App.css'
import TodoList from './components/TodoList'
import TodoDetails from './components/TodoDetails'

import { Route, Link, Switch } from 'react-router-dom'

const HomePage = () => <h1>WELCOME TO MY TODO APP</h1>

class App extends React.Component {
  state = {
    todos: [],
    todoInput: 'howdy'
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

  getSelectedTodo = id => this.state.todos.find(todo => todo.id === id)

  render () {
    console.log('app rendered with state:', this.state)
    const { todos } = this.state
    const { removeTodo } = this
    return (
      <div className='App'>
        <Link to='/'>
          <h1>Todo App</h1>
        </Link>
        <Link to='/todos'>TODOS</Link>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route
            exact
            path='/todos'
            component={props => (
              <TodoList todos={todos} removeTodo={removeTodo} />
            )}
          />
          <Route
            path='/todos/:id'
            component={props => {
              // find the right todo and pass it based in the url
              const id = parseInt(props.match.params.id)
              const todo = this.getSelectedTodo(id)
              return <TodoDetails todo={todo} />
            }}
          />
          <Route component={() => <h1>404 - GET OFF MY LAWN</h1>} />
        </Switch>
      </div>
    )
  }
}

export default App
