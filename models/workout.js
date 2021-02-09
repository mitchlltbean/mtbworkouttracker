const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  title: String,

  exers: [
    {
      type: Schema.Types.ObjectId,
      ref: "exer",
    },
  ],
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;
