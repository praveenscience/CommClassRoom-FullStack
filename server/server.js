// Import the Express JS Framework.
const express = require("express");
// Initialising an app instance.
const app = express();
// Configure a port address.
const port = 5000;

// Create a Get Request handler for /.
app.get("/", (req, res) => {
  res.json("Welcome to Community Classroom!");
});

// Make the app listen to a port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
