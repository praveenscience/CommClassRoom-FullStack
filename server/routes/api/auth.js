// Import Express JS library.
const express = require("express");
// Create a Router App.
const app = express.Router();

// Temporary Users Data.
const Users = {
  Praveen: {
    Name: "Praveen Kumar Purushothaman",
    // WARNING: USE HASHED PASSWORD!!!
    Password: "Praveen",
    Type: "Admin", // Student, Mentor, Admin, Disabled
    Verified: true,
    Personal: {
      Email: "commclassroom@praveen.science",
      Phone: "+447894561230"
    },
    CreatedAt: new Date()
  },
  Rohan: {
    Name: "Rohan Kulkarni",
    // WARNING: USE HASHED PASSWORD!!!
    Password: "Rohan",
    Type: "Student", // Student, Mentor, Admin, Disabled
    Verified: false,
    Personal: {
      Email: "rohan@gmail.com",
      Phone: "+919876543210"
    },
    CreatedAt: new Date()
  }
};
// Export the Router.
module.exports = app;
