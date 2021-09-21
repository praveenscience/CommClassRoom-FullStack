// Temporary Users Data.
const Users = require("../constants/Users.json");

const CheckUserNamePassword = (Username, Password) => {
  if (typeof Users[Username] !== "undefined") {
    if (Users[Username].Password === Password) {
      return Users[Username];
    } else {
      return false;
    }
  } else {
    return undefined;
  }
};

module.exports = {
  CheckUserNamePassword
};
