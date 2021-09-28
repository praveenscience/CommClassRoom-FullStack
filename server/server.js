// Import the Express JS Framework.
const express = require("express");
// Import Sessions.
const session = require("express-session");
// Import Morgan.
const morgan = require("morgan");
// Initialising an app instance.
const app = express();
// Configure a port address.
const port = 5000;
// Import routes.
const root = require("./routes/root");

// Add some custom middleware.
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(morgan("dev"));

// Create a session config object.
const SessionConfig = {
  secret: "c0mmun!7y Cl@ssr00m",
  resave: false,
  saveUninitialized: true,
  cookie: {}
};
// If running in prod, do some extra secure stuff.
// I am not even sure if the below condition shows true.
if (app.get("env") === "production") {
  app.set("trust proxy", 1); // trust first proxy
  sess.cookie.secure = true; // serve secure cookies
}
// Initialise the middleware.
app.use(session(SessionConfig));

// Add the routes as middleware - route handler.
app.use("/", root);

// Make the app listen to a port.
app.listen(port, () => {
  console.log(`Server started in port ${port}.`);
});
