import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUser } from "../../services/Users";

const Profile = ({ match }) => {
  const [User, setUser] = useState(null);
  const Username = match.params.Username;
  useEffect(() => {
    if (Username) {
      GetUser(Username).then(res => {
        setUser(res.data);
      });
    }
  }, [Username]);
  return (
    <div className="Profile">
      {User ? (
        <>
          <h1>
            User: {User.Name}
            <span className="badge bg-primary Profile-Role">{User.Role}</span>
          </h1>
          <pre>{JSON.stringify(User, null, 2)}</pre>
        </>
      ) : (
        <div className="text-center">
          <p>Loading...</p>
          <img src="https://i.imgur.com/5W7knyx.gif" alt="Loading..." />
        </div>
      )}
      <Link className="btn btn-success" to="/">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Profile;
