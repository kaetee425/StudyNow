import axios from 'axios'
import { FETCH_USER, FETCH_BIZREVIEW } from './types'

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')

	dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchBizReview = (bizID) => async dispatch => {
	const res = await axios.get('/api/business/' + bizID + '/review')

	dispatch({ type: FETCH_BIZREVIEW, payload: res.data})
}