const mongoose = require('mongoose');
const { Schema } = mongoose;

const oauth = new Schema ({
	googleId: String,
	name: String
});

mongoose.model('users', oauth);