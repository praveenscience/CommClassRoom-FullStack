import FormGroup from "../Bootstrap/FormGroup";

const Login = ({ Card, Forms, Errors, handleFormChange, handleFormSubmit }) => {
  const handleChange = e => {
    handleFormChange("Login", e.target.name, e.target.value);
  };
  return (
    <div className="Login">
      <Card
        Header="Login"
        Text="Please use this form if you already have an account here."
      >
        <form onChange={handleChange} onSubmit={handleFormSubmit}>
          {Object.keys(Forms).map(fg => (
            <FormGroup
              Id={fg}
              Type={fg === "Password" ? "password" : "text"}
              key={fg}
              Label={fg}
              Value={Forms[fg]}
            />
          ))}
          <button
            type="submit"
            class="btn btn-primary"
            disabled={
              !(
                Forms.Username.trim().length > 3 &&
                Forms.Password.trim().length > 3
              )
            }
          >
            Login
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
