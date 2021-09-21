// Import Express JS library.
const express = require("express");
// Create a Router App.
const app = express.Router();

let CurrentUser = null;

// Setup Login Path.
app.get("/login", (req, res) => {
  if (CurrentUser) {
    res.json(CurrentUser);
  } else {
    res.status(400).json({
      Error: "Not Logged In."
    });
  }
});

// Export the Router.
module.exports = app;
