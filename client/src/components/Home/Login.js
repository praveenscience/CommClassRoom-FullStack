import FormGroup from "../Bootstrap/FormGroup";

const Login = ({ Card, Forms, Errors }) => {
  return (
    <div className="Login">
      <Card
        Header="Login"
        Text="Please use this form if you already have an account here."
      >
        <form>
          {Object.keys(Forms).map(fg => (
            <FormGroup
              Id={fg}
              Type={fg === "Password" ? "password" : "text"}
              key={fg}
              Label={fg}
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
