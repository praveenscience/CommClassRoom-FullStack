const Login = ({ Card }) => {
  return (
    <div className="Login">
      <Card
        Header="Login"
        Text="Please use this form if you already have an account here."
      >
        <form>
          <button type="submit" class="btn btn-primary">
            Login
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
