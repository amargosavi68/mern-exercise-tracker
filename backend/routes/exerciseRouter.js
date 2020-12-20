const express = require('express');
const Exercise = require('../models/exercise.model');

const exerciseRouter = express.Router();

exerciseRouter.route('/')
.get((req, res) => {
     Exercise.find()
     .then(exercises => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(exercises);
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

exerciseRouter.route('/add')
.post((req, res) => {
     const username = req.body.username;
     const description = req.body.description;
     const duration = Number(req.body.duration);
     const date = Date.parse(req.body.date);

     const newExercise = new User({
          username,
          description,
          duration,
          date
     });
     
     newExercise.save()
     .then(users => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json('Exercise added successfully..');
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

module.exports = exerciseRouter;