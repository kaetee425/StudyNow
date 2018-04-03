import axios from 'axios'
import { FETCH_USER, FETCH_BIZREVIEW, FETCH_BIZ } from './types'

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')

	dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchBizReview = (bizID) => async dispatch => {
	const res = await axios.get('/api/business/' + bizID + '/review')

	dispatch({ type: FETCH_BIZREVIEW, payload: res.data})
}

export const fetchBiz = (data) => async dispatch => {
	console.log('data in index.js: ', data)
	const res = await axios.get('/api/business', data: {
		term: data.term,
		location: data.location
	})

	dispatch({ type: FETCH_BIZ, paylod: res.data})
}