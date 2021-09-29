const Dashboard = ({ Card, handleLogout, User }) => {
  return (
    <Card Title={`Welcome ${User.Name}`}>
      <p>
        Welcome to Community Classroom.{" "}
        {User.VerifyHash
          ? "Thanks for verifying and becoming a full user."
          : "Please verify your account as soon as possible, check your email for further information."}
      </p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </Card>
  );
};

export default Dashboard;
