import React from "react";
import { Link } from "react-router-dom";

const Profile = ({ Users, User, ...props }) => {
  return (
    <div className="Profile">
      <p>Hello</p>
      <pre>{JSON.stringify({ props, Users, User }, null, 2)}</pre>
      <p>This is User Path.</p>
      <Link className="btn btn-success" to="/">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Profile;
