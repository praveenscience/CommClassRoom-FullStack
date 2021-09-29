// Import Express JS library.
const express = require("express");
const {
  CheckUserNamePassword,
  RegisterNewUser,
  VerifyUser
} = require("../../helpers/Users");
// Create a Router App.
const app = express.Router();

// Endpoint to Verify a User.
app.get("/verify/:Username", (req, res) => {
  const Username = req.params.Username;
  const Code = req.query.Code;
  switch (VerifyUser(Username, Code)) {
    case -1:
      res.status(404).json({
        Error: "User not found."
      });
      break;
    case 0:
      res.status(400).json({
        Error: "Invalid code or user has already been verified."
      });
      break;
    case 1:
      res.json({
        Message: "User successfully verified."
      });
      break;
  }
});
// Endpoint to check current logged in user.
app.get("/login", (req, res) => {
  if (req.session.CurrentUser) {
    res.json(req.session.CurrentUser);
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
        req.session.CurrentUser = null;
        break;
      case -1:
        res.status(400).json({
          Error: "Invalid username or password."
        });
        req.session.CurrentUser = null;
        break;
      default:
        req.session.CurrentUser = CheckUserNamePassword(Username, Password);
        res.json(req.session.CurrentUser);
    }
  } else {
    res.status(400).json({
      Error:
        "Both Username and Password fields are supposed to be string values."
    });
  }
});
// Endpoint to register a new user.
app.post("/register", (req, res) => {
  const { Username, Password, Name, Email, Role } = req.body;
  if (
    typeof Username === "string" &&
    typeof Password === "string" &&
    typeof Name === "string" &&
    typeof Email === "string" &&
    typeof Role === "string"
  ) {
    // User input is right.
    // Call the registration function.
    if (RegisterNewUser(Username, Password, Name, Email, Role)) {
      res.status(201).json({
        Message: "User Created Successfully."
      });
    } else {
      res.status(409).json({
        Error: "Username already exists."
      });
    }
  } else {
    // User input is wrong.
    res.status(400).json({
      Error: "All five fields are mandatory and should be a string."
    });
  }
});

// Endpoint to logout a user.
app.post("/logout", (req, res) => {
  req.session.CurrentUser = null;
  res.status(204).json({
    Message: "User logged out successfully."
  });
});
// Export the Router.
module.exports = app;
