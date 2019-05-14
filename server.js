require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session');
const compression = require('compression');

//controllers
const pages = require('./controllers/pages');
const authentication = require('./services/passport-authentication');

app.use(compression());
app.use(express.static('dist'));

mongoose.connect(process.env.DB, {
  useNewUrlParser: true,
});

mongoose.connection.once('open', () => {
  console.log('Connected to Mongo via Mongoose');
}).on('error', (err) => {
  console.log('Connection Error: ', err);
});

app.use(session({
  secret: process.env.KEY,
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 60 * 60 * 1000,
    secure: false,
    httpOnly: false,
  },
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/', pages);
app.use('/authentication', authentication);

app.listen(8080, () => console.log("Server running on port 8080"));
