import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container min-vh-100 d-grid">
      <form className="my-auto">
        <div className="card w-50 mx-auto shadow">
          <fieldset className="w-50 mx-auto my-5">
            <legend className="text-center">Registro</legend>
            <div className="form-group mt-2">
              <label for="name">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="EJ: Juan Rodríguez"
              />
              <small id="emailHelp" className="form-text text-muted">
                No compartiremos tu correo con
              </small>
            </div>
            <div className="form-group mt-2">
              <label for="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
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
              />
            </div>
            <button type="submit" className="btn btn-primary mt-2 form-control">
              Registrar
            </button>
            <Link
              to="/"
              role="button"
              className="btn btn-secondary form-control mt-2"
            >
              Volver
            </Link>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Signup;
