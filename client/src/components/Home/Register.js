import FormGroup from "../Bootstrap/FormGroup";

const Register = ({ Card, Forms, Errors }) => {
  return (
    <div className="Register">
      <Card
        Header="Register"
        Text="Please use this form to register for a new account."
      >
        <form>
          {Object.keys(Forms).map(fg => (
            <FormGroup
              Id={"Reg" + fg}
              Type={fg === "Password" ? "password" : "text"}
              key={fg}
              Label={fg}
            />
          ))}
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
