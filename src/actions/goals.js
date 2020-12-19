import API from 'goals-todos-api'

export const ADD_GOAL = 'ADD_GOAL'
export const REMOVE_GOAL = 'REMOVE_GOAL'
export const RECIEVE_DATA = 'RECIEVE_DATA'

const addGoal = (goal) => {
  return {
    type: ADD_GOAL,
    goal,
  }
}

const removeGoal = (id) => {
  return {
    type: REMOVE_GOAL,
    id,
  }
}

export const handleAddGoal = (name) => {
  return (dispatch) => {
    return API.saveGoal(name)
    .then((goal) => {
      dispatch(addGoal(goal))
    })
    .catch(() => {
      alert('There was an error. Try again.')
    })
  }
}

export const handleRemoveGoal = (goal) => {
  return (dispatch) => {
    dispatch(removeGoal(goal.id))

    return API.deleteGoal(goal.id)
    .catch(() => {
      dispatch(addGoal(goal))
      alert('An error occurred. Try again.')
    })
  }
}
