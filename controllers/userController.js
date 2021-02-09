const express = require("express");
const router = express.Router();
const db = require("../models");

// home route
router.get("/", (req, res) => {
  res.send("hello");
  // res.send("index")
});

//workouts routes=============

//get all workouts
router.get("/getworkouts", (req, res) => {
  db.workout
    .find({})
    .populate("exers")
    .lean()
    .then((dbWorkouts) => {
      console.log(dbWorkouts);
      res.render("index", dbWorkouts);
    });
});

//post new workout
router.post("/createworkouts", ({ body }, res) => {
  db.workout
    .create(body)
    .then((dbWorkout) => {
      console.log(dbWorkout, "@@@@@@@@@@@@@");
      res.json(dbWorkout);
    })
    .catch((err) => {
      console.log(err);
      res.send(err);
    });
});

// exercise routes
router.get("/api/exer", (req, res) => {
  db.exer.find({}).then((dbExer) => {
    res.json(dbExer);
  });
});

router.get("/populatedexer", (req, res) => {
  db.workout
    .find({})
    .populate("exers")
    .then((dbPopExer) => {
      console.log(dbPopExer, "!!!!!!!!!!!!!!!");
      res.send(dbPopExer);
    });
});

// route for updating a workout with a new exercise
router.post("/api/exer", (req, res) => {
  db.exer
    .create(req.body)
    .then((exercise) => {
      console.log(exercise, "!!!!!!!!!!");
      db.workout
        .findOneAndUpdate(
          { _id: req.body.id },
          { $push: { exers: exercise._id } }
        )
        .then((dbFullwork) => {
          console.log(dbFullwork, "!!!!!!!!!!!!!!!");
          res.send(dbFullwork);
        });
    })
    .catch((err) => res.json(err));
});

module.exports = router;
