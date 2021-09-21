// Import the Express JS Framework.
const express = require("express");
// Initialising an app instance.
const app = express();
// Configure a port address.
const port = 5000;
// Import routes.
const root = require("./routes/root");

// Add the routes as middleware - route handler.
app.use("/", root);

// Make the app listen to a port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
