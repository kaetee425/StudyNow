const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session')

require('./models/oauth')
require('./middleware/passport')(passport)

const app = express();

//mongoose
const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/StudyNow'

mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI)

//passport
app.use(
	cookieSession({
		maxAge: 30 * 24 * 60 * 60 * 1000,
		keys: [keys.cookieKey]
	})
);
app.use(passport.initialize());
app.use(passport.session());
require('./routes/authRoutes')(app)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

const PORT = process.env.PORT || 3010;

app.listen(PORT, () => {
	console.log("App is now listening to port: ", PORT)
})