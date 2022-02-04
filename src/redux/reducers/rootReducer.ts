// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import layout from './layout'

const rootReducer = combineReducers({
  auth,
  layout
})

export default rootReducer

export type RootState = ReturnType<typeof rootReducer>
