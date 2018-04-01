import { FETCH_BIZREVIEW } from '../actions/types'

export default function(state = null, action) {
	switch(action.type){
		case FETCH_BIZREVIEW:
			return action.payload || false;
		default:
			return state;
	}
}