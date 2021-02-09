// *** Dependencies
// =============================================================
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 8080;
app.use(logger("dev"));
// require("dotenv").config();
// Requiring our models for syncing
const db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Static directory
app.use(express.static("public"));

// =============================================================

// Set Handlebars.
const exphbs = require("express-handlebars");
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main",
    helpers: {
      json: function (context) {
        return JSON.stringify(context, null, 4);
      },
    },
  })
);
app.set("view engine", "handlebars");

// =============================================================

// Routes -- ROUTES MUST COME AFTER MIDDLEWARE AND HANDLEBARS
// =============================================================
const userRoutes = require("./controllers/userController");
app.use(userRoutes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: false }).then(function () {
app.listen(PORT, function () {
  console.log("App listening on PORT " + PORT);
});
// });
