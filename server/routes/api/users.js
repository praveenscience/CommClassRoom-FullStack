const express = require("express");
const { ListAllUsers } = require("../../helpers/Users");
// Create a Router App.
const app = express.Router();

// All users without password!
const AllUsers = () => {
  const AllUsersObject = ListAllUsers();
  const AllUsersArray = Object.keys(AllUsersObject).map(Username => {
    const CurUser = {
      Username,
      ...AllUsersObject[Username]
    };
    delete CurUser.Password;
    if (CurUser.VerifyHash) {
      CurUser.VerifyHash = true;
    }
    return CurUser;
  });
  return AllUsersArray;
};

// List all the users endpoint.
app.get("/", (req, res) => {
  if (req.session.CurrentUser) {
    res.json(AllUsers());
  } else {
    res.status(400).json({
      Error: "Not Logged In."
    });
  }
});

// Get one single user.
app.get("/:Username", (req, res) => {
  if (req.session.CurrentUser) {
    const Username = req.params.Username.toLowerCase();
    const User = AllUsers().find(user => user.Username === Username);
    if (User) {
      res.json(User);
    } else {
      res.status(404).json({
        Error: "No such user exists."
      });
    }
  } else {
    res.status(400).json({
      Error: "Not Logged In."
    });
  }
});

// Export the Router.
module.exports = app;
