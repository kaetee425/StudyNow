import axios from 'axios';

export default {
	getBusiness: function(query) {
		return axios.get("/api/business", {
			params: { q: query}
		})
	}
}
