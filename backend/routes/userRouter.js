const express = require('express');
const User = require('../models/user.model');

const userRouter = express.Router();

userRouter.route('/')
.get((req, res) => {
     User.find()
     .then(users => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(users);
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

userRouter.route('/add')
.post((req, res) => {
     const username = req.body.username;
     const newUser = new User({username});

     newUser.save()
     .then(users => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json('User added successfully..');
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

module.exports = userRouter;