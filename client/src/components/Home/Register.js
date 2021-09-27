import FormGroup from "../Bootstrap/FormGroup";

const Register = ({ Card, Forms, Errors }) => {
  const FormElements = { ...Forms };
  delete FormElements.Role;
  return (
    <div className="Register">
      <Card
        Header="Register"
        Text="Please use this form to register for a new account."
      >
        <form>
          {Object.keys(FormElements).map(fg => (
            <FormGroup
              Id={"Reg" + fg}
              Type={fg === "Password" ? "password" : "text"}
              key={fg}
              Label={fg}
              Value={Forms[fg]}
            />
          ))}
          <div className="form-group mb-3">
            <label htmlFor="Role">Role</label>
            <select class="form-select" aria-label="Select your Role">
              <option value=""></option>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
