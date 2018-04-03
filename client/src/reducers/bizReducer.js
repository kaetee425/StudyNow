import { FETCH_BIZREVIEW, FETCH_BIZ } from '../actions/types'

export default function(state = null, action) {
	switch(action.type){
		case FETCH_BIZREVIEW:	
			return action.payload || false;
		case FETCH_BIZ:
			return action.payload || false;
		default:
			return state;
	}
}