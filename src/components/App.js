import React from 'react'
import {connect} from 'react-redux'
import {
  handleRecieveData
} from '../actions/shared'

import ConnectedTodos from './Todos'
import ConnectedGoals from './Goals'

class App extends React.Component {
  componentDidMount () {
    this.props.dispatch(handleRecieveData())
  }

  render() {

    if(this.props.loading){
      return <h2>Loading...</h2>
    }
    return (
      <div>
        <ConnectedTodos/>
        <ConnectedGoals/>
      </div>
    )
  }
}

export default connect((state) => ({
  loading: state.loading
}))(App)
