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

// Export the Router.
module.exports = app;
