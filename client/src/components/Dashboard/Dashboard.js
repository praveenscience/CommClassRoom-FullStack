import { useState } from "react";
import { VerifyUser } from "../../services/Auth";
import FormGroup from "../Bootstrap/FormGroup";
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
        <>
          <p>Thanks for verifying and becoming a full user.</p>
          {(Object.values(User.Personal).filter(v => v === null).length > 0 ||
            Object.values(User.Socials).filter(v => v === null).length > 0) && (
            <p>Please fill in all your profile details.</p>
          )}
        </>
      )}
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </Card>
  );
};

export default Dashboard;
