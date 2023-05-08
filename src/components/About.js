import { useContext } from "react";
import NavContext from "../context/navContext";
const About = () => {
  const { nav } = useContext(NavContext);
  return (
    <section id="about" className={`${nav === "about" ? "active" : ""}`}>
      {/* Main Heading Starts */}
      <div className="container page-title text-center">
        <h2 className="text-center">
          sobre <span>mí</span>
        </h2>
        <span className="title-head-subtitle">
          Me encanta crear cosas nuevas con código
        </span>
      </div>
      {/* Main Heading Ends */}
      <div className="container infos">
        <div className="row personal-info">
          {/* Personal Infos Starts */}
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="image-container">
              <img
                className="img-fluid d-block"
                src="img/fotodeperfilgit.jpg"
                alt=""
              />
            </div>
            <p className="d-block d-md-none">
              {`I'm`} Soy un Desarrollador Web Frontend, y soy muy apasionado y dedicado a mi trabajo. Con 1 año de experiencia como Desarrollador de Sofware, he adquirido las habilidades y conocimientos necesarios para que la empresa tenga éxito.
            </p>
          </div>
          <div className="row col-xl-6 col-lg-6 col-md-12">
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-1">
                <li>
                  <h6>
                    <span className="font-weight-600">Nombres</span>
                    Emerson Jair
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Apellidos</span>
                    Chacon Choque
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Edad</span>
                    23 años
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Nacionalidad</span>
                    Peruana
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Experience</span>1 año
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Dirección</span>
                    Lima
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
              <ul className="list-2">
                <li>
                  <h6>
                    <span className="font-weight-600">Freelance</span>
                    Disponible
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Idioma</span>
                    Español
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Número</span>+51 
                    980 910 083
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Email</span>
                    the_emerzon1999@hotmail.com
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Estudios Técnicos</span>
                    Si
                  </h6>
                </li>
                <li>
                  <h6>
                    <span className="font-weight-600">Portafolio</span>
                    Si
                  </h6>
                </li>
              </ul>
            </div>
            <div className="col-12 resume-btn-container">
              <a href="#" className="btn btn-resume">
                <span>
                  <i className="fa fa-download" />
                  Mi linkedin
                </span>
              </a>
            </div>
          </div>
          {/* Personal Infos Ends */}
        </div>
      </div>
      {/* Download CV Starts */}
      <div className="container col-12 mx-auto text-center">
        <hr className="about-section" />
      </div>
      {/* Download CV Ends */}
      {/* Resume Starts */}
      <div className="resume-container">
        <div className="container">
          <div className="row">
            {/* Experience Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6">
              <h2 className="font-weight-600 uppercase title-section">
                experiencia
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Web Frontend
                        <span className="separator" />
                        <span className="font-weight-700">PROYECTOS PERSONALES</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Tengo algunos proyectos autodidactas a lo largo de mis estudios de programadoción
                        lo cual realicé para reforzar mis conocimientos.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Wordpress
                        <span className="separator" />
                        <span className="font-weight-700">Freelancer</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        He trabajado independientemente realizando páginas web a clientes de distintos rubros de negocio.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022-2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Practicante Desarrollador WEB
                        <span className="separator" />
                        <span className="font-weight-700">Certus</span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                       En mis estudios en el instituto certus, realicé distintos proyectos comoo practicante en lo cual
                       reforcé mis conocimientos en tecnología que eran necesarios para pasar el curso
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Experience Ends */}
            {/* Education Starts */}
            <div className="col-xl-6 col-lg-6 col-md-6 skills-container">
              <h2 className="font-weight-600 uppercase title-section">
                Educación
              </h2>
              <div className="resume-items">
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2016 - 2020
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                       psicología
                        <span className="separator" />
                        <span className="font-weight-700">
                          Universidad san martín de porres
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Tengo estudios superiores de psicología incompleta, por lo tanto 
                        tengo conocimientos en habilidades blandas como la empatía y la comunicación asertiva.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2021 - 2022
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        python
                        <span className="separator" />
                        <span className="font-weight-700">
                          cisco networking academy
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Una de las mejores academias online para estudiar programación en lo cual adquirí mi certificado 
                        PCAP: Programming Essentials in Python.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
                {/* Item Starts */}
                <div className="item">
                  <span className="bullet" />
                  <div className="card">
                    <div className="card-header">
                      <span className="year">
                        <i className="fa fa-calendar" />
                        <i className="fa fa-caret-right" />
                        2022 - 2023
                      </span>
                      <span className="d-block font-weight-400 uppercase">
                        Desarrollador web frontend
                        <span className="separator" />
                        <span className="font-weight-700">
                          certus
                        </span>
                      </span>
                    </div>
                    <div className="card-body">
                      <p>
                        Tengo conocimientos web en la especialidad Frontend, lo cual me facilita el manejo de las tecnologías
                        por el lado del cliente.
                      </p>
                    </div>
                  </div>
                </div>
                {/* Item Ends */}
              </div>
            </div>
            {/* Education Ends */}
          </div>
          {/* Skills Starts */}
          <div className="row">
            {/* Skill Bar Starts */}
            <div className="col-12">
              <h2 className="font-weight-600 uppercase title-section skills-title">
                skills
              </h2>
            </div>
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">html</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">javascript</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={70}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">css</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={80}
                  style={{ width: "80%" }}
                />
                <span className="percent" style={{ right: "calc(20% - 21px)" }}>
                  80%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Diseño UX</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={50}
                  style={{ width: "50%" }}
                />
                <span className="percent" style={{ right: "calc(50% - 21px)" }}>
                  50%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">wordpress</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={90}
                  style={{ width: "90%" }}
                />
                <span className="percent" style={{ right: "calc(10% - 21px)" }}>
                  90%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">angular js</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Bootstrap</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={670}
                  style={{ width: "70%" }}
                />
                <span className="percent" style={{ right: "calc(30% - 21px)" }}>
                  70%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">GIT Y GITHUB</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={60}
                  style={{ width: "60%" }}
                />
                <span className="percent" style={{ right: "calc(40% - 21px)" }}>
                  60%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
            {/* Skill Bar Starts */}
            <div className="col-12 col-sm-6 col-md-4">
              <span className="skill-text">Inglés</span>
              <div className="chart-bar">
                <span
                  className="item-progress"
                  data-percent={30}
                  style={{ width: "30%" }}
                />
                <span className="percent" style={{ right: "calc(70% - 21px)" }}>
                  30%
                  <b className="arrow" />
                </span>
              </div>
            </div>
            {/* Skill Bar Ends */}
          </div>
          {/* Skills Starts */}
        </div>
        {/* Resume Ends */}
      </div>
    </section>
  );
};
export default About;
