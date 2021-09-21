// Import Express JS library.
const express = require("express");
// Create a Router App.
const app = express.Router();

// Create a Get Request handler for /.
app.get("/", (req, res) => {
  res.json("Welcome to Community Classroom!");
});

// Export the Router.
module.exports = app;
