import {ADD_TODO} from '../actions/todos'
import {ADD_GOAL} from '../actions/goals'

//Validator Middleware
const validator = (store) => (next) => (action) => {
  if (action.type === ADD_TODO &&
      action.todo.name.toLowerCase().includes('bitcoin')) {
    return alert('No!! This is a Bad Idea.')
  }

  if (action.type === ADD_GOAL &&
      action.goal.name.toLowerCase().includes('bitcoin')) {
    return alert('No!! This is a Bad Idea.')
  }

  return next(action)
}

export default validator
