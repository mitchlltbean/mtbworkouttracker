const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  name: String,
  type: String,
  weight: String,
  sets: String,
  reps: String,
  duration: String,
});

const exer = mongoose.model("exer", exerciseSchema);
module.exports = exer;
