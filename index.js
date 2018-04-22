const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session')
const bodyParser = require('body-parser')

const Pusher = require('pusher');
const cors = require('cors');

require('./models/oauth')
require('./models/skillsSchema')
require('./middleware/passport')(passport)

const app = express();

//mongoose
const MONGODB_URI = keys.mongoURI || 'mongodb://localhost/StudyNow'

mongoose.Promise = Promise;
mongoose.connect(keys.mongoURI)

app.get('/', (req, res) => {
	res.send({ message: "Hello"})
})

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
require('./routes/skillsRoutes')(app)

if (process.env.NODE_ENV === 'production') {
	app.use(express.static('client/build'));

	const path = require('path');
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	});
}

// ===============Chat Server======================

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json())
const pusher = new Pusher({
	appId: 'APP_ID',
	key: 'APP_KEY',
	secret: 'APP_SECRET',
	cluster: 'APP_CLUSTER',
	encrypted: true
});

const PORT = process.env.PORT || 3010;

// ===============Chat Server======================
app.post('/message', (req, res) => {
	const payload = req.body;
	pusher.trigger('chat', 'message', payload);
	res.send(payload)
});

app.listen(PORT, () => {
	console.log("App is now listening to port: ", PORT)
})

