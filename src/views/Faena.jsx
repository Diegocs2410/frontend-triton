import { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import { Link, Outlet } from "react-router-dom";

const Faena = () => {
  const [faena, setFaena] = useState([]);

  useEffect(() => {
    const faenas = async () => {
      const {
        data: { data },
      } = await axios.get("http://localhost:4000/api/faenas");
      setFaena(data);
      console.log(data);
    };
    faenas();
  }, []);

  return (
    <div className="container text-center">
      <h1 className="mt-5">Mis Faenas</h1>
      <div className="row">
        {faena.map((faena) => (
          <div className="col-md-4" key={faena._id}>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{faena.departamento}</h5>
                <p className="card-text">{faena.ciudad}</p>
                <p>{moment(faena.fecha).format("MMMM Do YYYY, h:mm:ss a")}</p>
                <p>{faena.tipo}</p>
                <Link
                  to={`/faena/${faena._id}`}
                  className="btn btn-warning me-4"
                >
                  Editar
                </Link>
                <Link to="/" className="btn btn-danger">
                  Eliminar
                </Link>
              </div>
            </div>
          </div>
        ))}
        <Outlet />
      </div>
    </div>
  );
};

export default Faena;
