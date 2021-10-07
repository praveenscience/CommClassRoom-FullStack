import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GetUser } from "../../services/Users";
import DefaultAvatar from "../../assets/DefaultAvatar.png";

const Profile = ({ Card, match }) => {
  const [User, setUser] = useState(null);
  const Username = match.params.Username;
  useEffect(() => {
    if (Username) {
      GetUser(Username).then(res => {
        setUser(res.data);
      });
    }
  }, [Username]);
  let UserRows;
  if (User) {
    UserRows = [
      {
        Name: "Full Name",
        Value: User.Name
      },
      {
        Name: "Role",
        Value: User.Role
      },
      {
        Name: "Verification Status",
        Value: User.VerifyHash ? "Not Verified" : "Verified"
      },
      {
        Name: "Member From",
        Value:
          new Date(User.CreatedAt).toDateString() +
          " at " +
          new Date(User.CreatedAt).toLocaleTimeString().substr(0, 5)
      }
    ];
    if (User.Institute) {
      UserRows.push({
        Name: "Phone Number",
        Value: User.Institute
      });
    }
    if (User.Personal.Gender) {
      UserRows.push({
        Name: "Gender",
        Value: User.Personal.Gender
      });
    }
    if (User.Personal.Phone) {
      UserRows.push({
        Name: "Phone Number",
        Value: User.Personal.Phone
      });
    }
    if (User.Personal.Location) {
      UserRows.push({
        Name: "Phone Number",
        Value: User.Personal.Location
      });
    }
  }
  return (
    <div className="Profile">
      {User ? (
        <>
          <Card Title={`Profile: ${User.Name}`} className="mb-3">
            <div className="container">
              <div className="row">
                <div className="col-12 col-md-3">
                  <div className="text-center my-4">
                    <img
                      src={User.Avatar ? User.Avatar : DefaultAvatar}
                      className="img-thumbnail rounded-circle w-75"
                      alt={User.Name}
                    />
                  </div>
                </div>
                <div className="col-12 col-md-9">
                  <div className="list-group">
                    {UserRows.map((row, key) => (
                      <div className="list-group-item" key={key}>
                        <small>{row.Name}</small>
                        <div class="d-flex w-100 justify-content-between">
                          <h5 class="mb-1">{row.Value}</h5>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>
          {Object.keys(User.Socials).filter(social => User.Socials[social])
            .length > 0 && (
            <Card Title={`${User.Name}’s Socials`} className="mb-3">
              <div className="col-12 col-md-9">
                <div className="list-group">
                  {Object.keys(User.Socials)
                    .filter(social => User.Socials[social])
                    .map(social => (
                      <a
                        href={User.Socials[social]}
                        className="list-group-item list-group-item-action"
                        key={social}
                      >
                        {social}
                      </a>
                    ))}
                </div>
              </div>
            </Card>
          )}
        </>
      ) : (
        <div className="text-center">
          <p>Loading...</p>
          <img src="https://i.imgur.com/5W7knyx.gif" alt="Loading..." />
        </div>
      )}
      <Link className="btn btn-success mb-4" to="/">
        Back to Dashboard
      </Link>
    </div>
  );
};

export default Profile;
