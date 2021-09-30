const VerifyUserSection = ({
  Output,
  User,
  handleVerifyUser,
  FormGroup,
  Code,
  setCode
}) => {
  return (
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
        further information. Alternatively, if you know the Verification Code,
        please enter here.
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
  );
};

export default VerifyUserSection;
