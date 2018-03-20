import axios from 'axios';

export default {
	getBusiness: function(data) {
		return axios.get("/api/business", { params: { q: data}})
	}
}
