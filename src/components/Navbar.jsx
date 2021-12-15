import BrandImg from "../img/header/DataFishing2.png";
import { Link } from "react-router-dom";
import useUser from "../context/UserContext";

const Navbar = () => {
  const { logoutUser, user } = useUser();
  const { login, name } = user;
  console.log(user);
  return (
    <nav className="navbar navbar-expand-md navbar-dark bg-primary">
      <div className="container">
        <a className="navbar-brand" href="/">
          <img
            src={BrandImg}
            alt="Imagen Titulo Data Fishing"
            className="figure-img img-fluid rounded img-brand"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarColor01"
          aria-controls="navbarColor01"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home
                <span className="visually-hidden">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Nosotros
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Presentación
              </a>
            </li>
            {login && (
              <li className="nav-item">
                <Link className="nav-link" to="/faena">
                  Ingresar Faena
                </Link>
              </li>
            )}
            <li className="nav-item">
              {login ? (
                <Link
                  className="nav-link text-capitalize"
                  to="/"
                  onClick={logoutUser}
                >
                  {name} Salir
                </Link>
              ) : (
                <Link className="nav-link" to="/signup">
                  Login / Registro
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
