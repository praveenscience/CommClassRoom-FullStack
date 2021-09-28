import FormGroup from "../Bootstrap/FormGroup";

const Register = ({
  Card,
  Forms,
  Errors,
  Successes,
  handleFormChange,
  handleFormSubmit
}) => {
  const OnChangeDummy = () => {};
  const FormElements = { ...Forms };
  delete FormElements.Role;
  const handleChange = e => {
    handleFormChange(
      "Register",
      e.target.name.replace("Reg", ""),
      e.target.value
    );
  };
  return (
    <div className="Register">
      <Card
        Header="Register"
        Text="Please use this form to register for a new account."
      >
        {Successes.length > 0 && (
          <div className="alert alert-success">{Successes}</div>
        )}
        {Errors.length > 0 && (
          <div className="alert alert-danger">{Errors}</div>
        )}
        <form onChange={handleChange} onSubmit={handleFormSubmit}>
          {Object.keys(FormElements).map(fg => (
            <FormGroup
              Id={"Reg" + fg}
              Type={fg.indexOf("Password") > -1 ? "password" : "text"}
              key={fg}
              Label={fg}
              Value={Forms[fg]}
              onChange={OnChangeDummy}
            />
          ))}
          <div className="form-group mb-3">
            <label htmlFor="Role">Role</label>
            <select
              className="form-select"
              name="Role"
              value={Forms.Role}
              aria-label="Select your Role"
              onChange={OnChangeDummy}
            >
              <option value="" disabled></option>
              <option value="Student">Student</option>
              <option value="Mentor">Mentor</option>
            </select>
          </div>
          <button
            type="submit"
            className="btn btn-primary"
            disabled={
              !(
                Forms.Username.trim().length > 3 &&
                Forms.Password.trim().length > 3 &&
                Forms.Password === Forms["Confirm Password"] &&
                Forms.FullName.trim().length > 3 &&
                Forms.Role.trim().length > 5
              )
            }
          >
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
