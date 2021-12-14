import imgMain from "../img/header/DataFishing.PNG";
const Main = () => {
  return (
    <section className="container">
      <div className="row mt-2 mt-md-5">
        <div className="col-md-6 justify-content-center align-content-center d-flex">
          <img
            src={imgMain}
            alt="Imagen principal Data Fishing"
            className="img-fluid w-50 my-5 mt-5"
          />
        </div>
        <div className="col-md-6">
          <h2 className="display-5 text-center">Misión</h2>
          <p className="">
            Pretende fortalecer el monitoreo biológico y comercial de la pesca
            artesanal por medio de una plataforma de recolección de datos
            pesqueros y de imágenes satélites para monitorear, sistematizar,
            depurar y analizar la información pesquera, con el fin de orientar
            la actividad hacía un enfoque de desarrollo sostenible.{" "}
          </p>
          <h2 className="display-5 text-center mt-5">Visión</h2>
          <p className="">
            Nuestra visión es implementar esquemas de aprovechamiento
            responsable de los recursos pesqueros y de gobernanza efectiva para
            abordar el reto de balancear el bienestar socioeconómico, derivado
            de la extracción de dichos recursos, y el bienestar ecológico,
            requerido para mantener la base natural que sustenta la producción
            pesquera en el largo plazo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Main;
