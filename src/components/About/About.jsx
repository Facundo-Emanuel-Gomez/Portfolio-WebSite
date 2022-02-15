import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://www.adslzone.net/app/uploads-adslzone.net/2021/10/lenguaje-de-programacion.jpg"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">Acerca de mí</h1>
        <p className="a-sub">
          es un hecho establecido desde hace mucho tiempo que un lector se
          distraerá con el contenido legible
        </p>
        <p className="a-descrip">
          Busco desarrollarme dentro de una empresa que me permita ampliar mis
          conocimientos, mi forma de estudio y de trabajo al mismo tiempo que me
          de la oportunidad de aportar mi entusiamo y mis habilidades. Considero
          que tengo facilidad para trabajar en equipo y empatía con el entorno
          que me rodea.
        </p>
        <div className="a-content">
          <img
            src="https://llerosadreams.es/wp-content/uploads/2020/04/lenguajes-programacion.png"
            alt=""
            className="a-ftContent"
          />
          <div className="a-content-texts">
            <h4 className="a-content-title">
              Lorem ipsum, dolor sit amet consectetur
            </h4>
            <p className="a-content-descrip">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              eligendi vitae error voluptate officia libero deserunt ipsum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
