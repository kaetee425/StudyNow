import { FETCH_USER } from '../actions/types'

export default function(state = null, action) {
	console.log(action.type)
	switch(action.type){
		case FETCH_USER:
			console.log("payload", action.payload)
			return action.payload || false;
		default:
			return state;
	}
}