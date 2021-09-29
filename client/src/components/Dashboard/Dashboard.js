import { useState } from "react";
import { VerifyUser } from "../../services/Auth";
import FormGroup from "../Bootstrap/FormGroup";

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
        <div className="alert alert-danger">
          <h3>Unverified Account</h3>
          {Output && (
            <div
              className={
                "alert alert-" +
                (Output.indexOf("Error") === 0 ? "dark" : "success")
              }
            >
              {Output}
            </div>
          )}
          <p>
            Please verify your account as soon as possible, check your email for
            further information. Alternatively, if you know the Verification
            Code, please enter here.
          </p>
          <form
            action={"/api/auth/verify/" + User.Username}
            onSubmit={handleVerifyUser}
          >
            <FormGroup
              Id="Code"
              Label="Verification Code"
              Type="text"
              Desc="Please enter the verification code you received in your email."
              Value={Code}
              onChange={e => {
                setCode(e.target.value);
              }}
            />
            <input type="submit" className="btn btn-primary" value="Verify" />
          </form>
        </div>
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
