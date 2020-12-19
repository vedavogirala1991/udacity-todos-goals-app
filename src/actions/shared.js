import API from 'goals-todos-api'

export const RECIEVE_DATA = 'RECIEVE_DATA'

const recieveData = (todos,goals) => {
  return {
    type: RECIEVE_DATA,
    todos,
    goals,
  }
}

export const handleRecieveData = () => {
  return (dispatch) => {
    Promise.all([
      API.fetchTodos(),
      API.fetchGoals()
    ]).then(([todos, goals]) => {
      dispatch(recieveData(todos,goals))
    })
  }
}
