import {applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import validator from './validator'
import logger from './logger'

export default applyMiddleware (
  thunk,
  validator,
  logger
)
