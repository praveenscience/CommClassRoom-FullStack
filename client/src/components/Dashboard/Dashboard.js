const Dashboard = ({ Card, handleLogout, User }) => {
  return (
    <Card Title={`Welcome ${User.Name}`}>
      <p>
        Welcome to Community Classroom.{" "}
        {User.VerifyHash
          ? "Please verify your account as soon as possible, check your email for further information."
          : "Thanks for verifying and becoming a full user."}
      </p>
      <button className="btn btn-danger" onClick={handleLogout}>
        Logout
      </button>
    </Card>
  );
};

export default Dashboard;
