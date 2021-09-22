const express = require("express");
const { ListAllUsers } = require("../../helpers/Users");
// Create a Router App.
const app = express.Router();

// All users without password!
const AllUsersObject = ListAllUsers();
const AllUsers = Object.keys(AllUsersObject).map(Username => {
  const CurUser = {
    Username,
    ...AllUsersObject[Username]
  };
  delete CurUser.Password;
  return CurUser;
});

// List all the users endpoint.
// WARNING: PROTECT THIS ROUTE.
app.get("/", (req, res) => {
  res.json(AllUsers);
});

// Get one single user.
app.get("/:Username", (req, res) => {
  const Username = req.params.Username;
  const User = AllUsers.find(user => user.Username === Username);
  if (User) {
    res.json(User);
  } else {
    res.status(404).json({
      Error: "No such user exists."
    });
  }
});

// Export the Router.
module.exports = app;
