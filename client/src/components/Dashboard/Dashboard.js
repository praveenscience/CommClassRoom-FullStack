import { useState } from "react";
import { Link } from "react-router-dom";
import { VerifyUser } from "../../services/Auth";
import FormGroup from "../Bootstrap/FormGroup";
import ProfileCompleteness from "./_ProfileCompleteness";
import VerifiedUserSection from "./_VerifiedUserSection";
import VerifyUserSection from "./_VerifyUserSection";

const Dashboard = ({ Card, handleLogout, User }) => {
  const [Code, setCode] = useState("");
  const [Output, setOutput] = useState(null);
  const handleVerifyUser = e => {
    e.preventDefault();
    VerifyUser(User.Username, Code)
      .then(res => {
        if (res.status === 200) {
          setOutput(
            "Verification was successful. Please relogin to enable all the features."
          );
          setTimeout(() => {
            handleLogout({ preventDefault: () => {} });
          }, 2500);
        }
      })
      .catch(() => {
        setOutput("Error! Invalid Code.");
      });
  };
  return (
    <Card Title={`Welcome ${User.Name}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-8 col-xl-9">
            <p>Welcome to Community Classroom.</p>
            {User.VerifyHash ? (
              <VerifyUserSection
                {...{
                  Output,
                  User,
                  handleVerifyUser,
                  FormGroup,
                  Code,
                  setCode
                }}
              />
            ) : (
              <VerifiedUserSection />
            )}
            <Link
              className="btn btn-success me-2"
              to={"/users/" + User.Username}
            >
              My Profile
            </Link>
            <button className="btn btn-danger" onClick={handleLogout}>
              Logout
            </button>
          </div>
          <div className="col-12 col-md-6 col-lg-4 col-xl-3 ProfileCompletenessWrapper">
            <ProfileCompleteness User={User} />
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Dashboard;
