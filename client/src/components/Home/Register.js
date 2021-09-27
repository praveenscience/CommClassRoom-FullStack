const Register = ({ Card }) => {
  return (
    <div className="Register">
      <Card
        Header="Register"
        Text="Please use this form to register for a new account."
      >
        <form>
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
