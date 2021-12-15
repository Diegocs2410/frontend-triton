import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useUser from "../context/UserContext";

const initialState = {
  name: "",
  email: "",
  password: "",
};

const Signup = () => {
  const [userData, setUserData] = useState(initialState);
  const { registerUser } = useUser();
  const navigate = useNavigate();
  const { email, name, password } = userData;

  // HandleSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser(userData, navigate);
  };
  //   HandleChange
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="container min-vh-100 d-grid">
      <form className="my-auto" onSubmit={handleSubmit}>
        <div className="card w-50 mx-auto shadow">
          <fieldset className="w-75 mx-auto my-5">
            <legend className="text-center display-5">Registro</legend>
            <div className="form-group mt-2">
              <label for="name">Nombre Completo</label>
              <input
                type="text"
                className="form-control"
                id="name"
                aria-describedby="nameHelp"
                placeholder="EJ: Juan Rodríguez"
                minLength={3}
                name="name"
                value={name}
                onChange={handleChange}
                required
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
              <label for="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
                minLength={8}
                name="password"
                required
                value={password}
                onChange={handleChange}
              />
            </div>
            <Link className="link-info mt-2 d-inline-block" to="/login">
              ¿Ya tienes cuenta? Inicia sesión
            </Link>
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
