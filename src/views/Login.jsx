import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="container min-vh-100 d-grid">
      <form className="my-auto">
        <div className="card w-50 mx-auto shadow">
          <fieldset className="w-75 mx-auto my-5">
            <legend className="text-center display-5">Login</legend>
            <div className="form-group mt-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                No compartiremos tu correo con
              </small>
            </div>
            <div className="form-group mt-2">
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                minLength={8}
                name="password"
                required
              />
            </div>
            <Link className="link-info d-inline-block mt-2" to="/signup">
              ¿No tienes cuenta aún? Registrate
            </Link>
            <button type="submit" className="btn btn-primary mt-2 form-control">
              Iniciar Sesión
            </button>
            <Link
              to="/"
              role="button"
              className="btn btn-secondary form-control mt-2"
            >
              Cancelar
            </Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Login;
