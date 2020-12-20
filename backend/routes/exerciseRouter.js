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

     const newExercise = new Exercise({
          username,
          description,
          duration,
          date
     });
     
     newExercise.save()
     .then(exercise => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json('Exercise added successfully..');
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

exerciseRouter.route('/:id')
.get((req, res) => {
     Exercise.findById(req.params.id)
     .then(exercise =>{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(exercise);
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
})
.put((req, res) => {
     Exercise.findById(req.params.id)
     .then(exercise =>{
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json("Exercise Updated: " + exercise);
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
})

.delete((req, res) => {
     Exercise.findByIdAndDelete(req.params.id)
     .then(exercise => {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json("Exercise Deleted: " + exercise);
     })
     .catch(err => {
          res.statusCode = 400;
          res.json('Error: ' + err);
     })
});

module.exports = exerciseRouter;