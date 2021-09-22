// Import Express JS library.
const express = require("express");
// Create a Router App.
const app = express.Router();
// Import the routes.
const auth = require("./api/auth");
const users = require("./api/users");

// Create a Get Request handler for /.
app.get("/", (req, res) => {
  res.json("Welcome to Community Classroom API!");
});
// Routes handler.
app.use("/auth", auth);
app.use("/users", users);

// Export the Router.
module.exports = app;
