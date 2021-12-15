import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../context/UserContext";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Login = () => {
  const [userData, setUserData] = useState(initialState);
  const { email, password } = userData;
  const navigate = useNavigate();
  const { loginUser } = useUser();

  //   HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };
  // HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(userData, navigate);
  };

  return (
    <div className="container min-vh-100 d-grid">
      <form className="my-auto" onSubmit={handleSubmit}>
        <div className="card w-50 mx-auto shadow">
          <fieldset className="w-75 mx-auto my-5">
            <legend className="text-center display-5">Login</legend>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={handleChange}
                required
              />
              <small id="emailHelp" className="form-text text-muted">
                No compartiremos tu correo con
              </small>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                minLength={8}
                name="password"
                value={password}
                onChange={handleChange}
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
