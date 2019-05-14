const passport = require('passport');
const LocalStrategy = require('passport-local');
const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

// models
const User = require('../db/models/User');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Register New User
router.post('/register', (req, res) => {
  console.log('register');
  const { username, password, confirmPassword } = req.body;
  if (password === confirmPassword) {
    User.register(new User({
      username,
      password,
    }), password.trim(), (err) => {
      if (err) {
        console.log(err.message);
        res.send({ data: err.message });
      } else {
        passport.authenticate('local')(req, res, () => {
          res.send({ name: 'authenticated', user: req.user.username.trim(), data: 'Registration Successful!' });
        });
      }
    });
  } else {
    res.send({ data: 'Passwords Do Not Match' });
  }
});

// Login
router.post('/login', passport.authenticate('local'), (req, res) => {
  if (!req.user) {
    res.send({
      name: 'invalid-credentials',
      data: 'Login Failed. Please try Again.',
    });
  } else if (req.user) {
    res.send({
      name: 'authenticated',
      user: req.user.username.trim(),
      data: 'Login Successful!',
    });
  }
});

// Logout
router.post('/logout', (req, res) => {
  req.logout();
  return res.send({ data: 'You are logged out.' });
});

// Check login
router.get('/check-login', (req, res) => {
  if (req.user) {
    res.json({ loggedIn: true, user: req.user.username.trim() });
  } else if (!req.user) {
    res.json({ loggedIn: false });
  }
});

router.get('/get-user-profile', (req, res) => {
  if (req.user) {
    const { username, _id} = req.user;
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ username, _id }, null, 3));
  } else if (!req.user) {
    res.json({ data: false });
  }
});

module.exports = router;