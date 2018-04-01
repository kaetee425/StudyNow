import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bizReducer from './bizReducer'

export default combineReducers ({
	auth: authReducer,
	biz: bizReducer
})