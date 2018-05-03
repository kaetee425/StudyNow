import axios from 'axios'
import { FETCH_USER, FETCH_BIZREVIEW, FETCH_BIZ } from './types'

export const fetchUser = () => async dispatch => {
	const res = await axios.get('/api/current_user')

	dispatch({ type: FETCH_USER, payload: res.data })
}

export const fetchBizReview = (bizID) => async dispatch => {
	const res = await axios.get('/api/businesses/' + bizID + '/review')

	dispatch({ type: FETCH_BIZREVIEW, payload: res.data})
}

export const fetchBiz = (termLocation) => async dispatch => {
	
	const res = await axios.get('/api/businesses', {params: { term: termLocation.term, location: termLocation.location}})

	console.log(res.data)
	dispatch({ type: FETCH_BIZ, payload: res.data})
}