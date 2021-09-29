import FormGroup from "../Bootstrap/FormGroup";

const Dashboard = ({ Card, handleLogout, User }) => {
  return (
    <Card Title={`Welcome ${User.Name}`}>
      <p>Welcome to Community Classroom.</p>
      {User.VerifyHash ? (
        <div className="alert alert-danger">
          <h3>Unverified Account</h3>
          <p>
            Please verify your account as soon as possible, check your email for
            further information. Alternatively, if you know the Verification
            Code, please enter here.
          </p>
          <form action={"/api/auth/verify/" + User.Username}>
            <FormGroup
              Id="Code"
              Label="Verification Code"
              Type="text"
              Desc="Please enter the verification code you received in your email."
            />
            <input type="submit" className="btn btn-primary" value="Verify" />
          </form>
        </div>
      ) : (
        "Thanks for verifying and becoming a full user."
      )}
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </Card>
  );
};

export default Dashboard;
