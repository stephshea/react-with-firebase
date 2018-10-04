import authReducer from 
'./authReducer'
import projectReducer from './projectReducer';
import projectReducer from './projectReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducer({
  auth: authReducer,
  project: projectReducer
})

export default rootReducer