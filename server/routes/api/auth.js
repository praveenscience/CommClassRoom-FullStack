// Import Express JS library.
const express = require("express");
const { CheckUserNamePassword } = require("../../helpers/Users");
// Create a Router App.
const app = express.Router();

let CurrentUser = null;

// Endpoint to check current logged in user.
app.get("/login", (req, res) => {
  if (CurrentUser) {
    res.json(CurrentUser);
  } else {
    res.status(400).json({
      Error: "Not Logged In."
    });
  }
});
// Endpoint to login a user.
app.post("/login", (req, res) => {
  const { Username, Password } = req.body;
  if (!Username || !Password) {
    res.status(400).json({
      Error: "Both Username and Password fields are mandatory."
    });
  } else if (typeof Username === "string" && typeof Password === "string") {
    switch (CheckUserNamePassword(Username, Password)) {
      case 0:
        res.status(404).json({
          Error: "User does not exist."
        });
        CurrentUser = null;
        break;
      case -1:
        res.status(400).json({
          Error: "Invalid username or password."
        });
        CurrentUser = null;
        break;
      default:
        CurrentUser = CheckUserNamePassword(Username, Password);
        res.json(CurrentUser);
    }
  } else {
    res.status(400).json({
      Error:
        "Both Username and Password fields are supposed to be string values."
    });
  }
});
// Endpoint to logout a user.
app.post("/logout", (req, res) => {
  CurrentUser = null;
  res.status(204).json({
    Message: "User logged out successfully."
  });
});
// Export the Router.
module.exports = app;
