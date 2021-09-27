import FormGroup from "../Bootstrap/FormGroup";

const Login = ({ Card, Forms, Errors, handleFormChange }) => {
  const handleChange = e => {
    handleFormChange("Login", e.target.name, e.target.value);
  };
  return (
    <div className="Login">
      <Card
        Header="Login"
        Text="Please use this form if you already have an account here."
      >
        <form onChange={handleChange}>
          {Object.keys(Forms).map(fg => (
            <FormGroup
              Id={fg}
              Type={fg === "Password" ? "password" : "text"}
              key={fg}
              Label={fg}
              Value={Forms[fg]}
            />
          ))}
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
