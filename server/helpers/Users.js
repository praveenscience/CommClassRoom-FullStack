// Temporary Users Data.
const Users = require("../constants/Users.json");

const CheckUserNamePassword = (Username, Password) => {
  if (typeof Users[Username] !== "undefined") {
    if (Users[Username].Password === Password) {
      // Correct Username and Password.
      return Users[Username];
    } else {
      // Wrong Username and Password.
      return -1;
    }
  } else {
    // User does not exist.
    return 0;
  }
};

module.exports = {
  CheckUserNamePassword
};
