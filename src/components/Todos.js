import React from 'react'
import {
  handleAddTodo,
  handleRemoveTodo,
  handleToggleTodo
} from '../actions/todos'
import List from './List'
import {connect} from 'react-redux'



class Todos extends React.Component {
  addItem = (e) => {
    e.preventDefault()
    this.props.dispatch(handleAddTodo(this.input.value))
    this.input.value = ''
  }

  removeItem = (todo) => {
    this.props.dispatch(handleRemoveTodo(todo))
  }

  toggleItem = (id) => {
    this.props.dispatch(handleToggleTodo(id))
  }

  render() {
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add Todo"
          ref={(input) => this.input = input}
        />
        <button onClick={this.addItem}>Add Todo</button>
        <List
          toggle={this.toggleItem}
          items={this.props.todos}
          remove={this.removeItem}
        />
      </div>
    )
  }
}

export default connect((state) => ({
  todos: state.todos
}))(Todos)
