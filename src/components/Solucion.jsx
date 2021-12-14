import imgSolution from "../img/index/Solución.PNG";
const Solucion = () => {
  return (
    <section className="bg-gradient">
      <div className="container">
        <h2 className="text-center fw-bold display-4 mt-2 mt-md-4">Solucion</h2>
        <img src={imgSolution} alt="Imagen solución" className="img-fluid" />
      </div>
    </section>
  );
};

export default Solucion;
