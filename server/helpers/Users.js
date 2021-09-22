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

const RegisterNewUser = (Username, Password, Name, Email) => {
  // Create a Default user template.
  const DefaultUser = {
    Name,
    Password,
    Role: "Student",
    Verified: false,
    Personal: {
      Gender: null,
      Email,
      Phone: null
    },
    Socials: {
      Facebook: null,
      Instagram: null,
      Twitter: null,
      LinkedIn: null,
      GitHub: null,
      StackOverflow: null,
      WhatsApp: null,
      Telegram: null,
      Discord: null
    },
    CreatedAt: new Date()
  };
};

module.exports = {
  CheckUserNamePassword,
  RegisterNewUser
};
