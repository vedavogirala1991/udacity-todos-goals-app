import {RECIEVE_DATA} from '../actions/shared'

export default const loading = (state = true, action) => {
  switch (action.type) {
    case RECIEVE_DATA:
      return false
    default:
      return state
  }
}
