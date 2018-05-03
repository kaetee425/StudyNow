import { combineReducers } from 'redux'
import authReducer from './authReducer'
import bizReducer from './bizReducer'
import bizReviewReducer from './bizReviewReducer'

export default combineReducers ({
	auth: authReducer,
	biz: bizReducer,
	bizReview: bizReviewReducer
})