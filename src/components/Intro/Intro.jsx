/* eslint-disable no-unused-vars */
import React from "react";
import "./Intro.css";
import FotoPerfil from "../../img/FotoPerfil.jpg";

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hola, mi nombre es</h2>
          <h2 className="i-name">Facundo Gómez</h2>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Desarrollador Web</div>
              <div className="i-title-item">FrontEnd</div>
              <div className="i-title-item">Proactivo</div>
              <div className="i-title-item">Estudiante</div>
              <div className="i-title-item">Disponibilidad</div>
            </div>
          </div>
          <p className="i-descrip">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
            consequatur atque nostrum ipsum reiciendis distinctio ullam est
            officia quae culpa. Rem velit laboriosam neque molestias dolores ab
            est veniam quo.
          </p>
        </div>
        <svg
          width="75"
          height="85"
          viewBox="0 0 75 75"
          fill="none"
          stroke="#black"
          className="i-scroll"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="scroll">
            <path
              id="Vector"
              d="M40.5 15L34.5 9L28.5 15"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              id="Vector_2"
              d="M28.5 24L34.5 30L40.5 24"
              stroke-width="3"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group">
              <path
                id="Vector_3"
                d="M9 37.5H60"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <path
              id="Vector_4"
              d="M34.5 27V9"
              stroke-width="2.9895"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <g id="Group_2">
              <path
                id="Vector_5"
                d="M9 27C9 12.918 20.418 1.5 34.5 1.5C48.5"
                stroke-width="3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
          </g>
        </svg>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        {/* <img src={FotoPerfil} alt="" className="i-img" /> */}
      </div>
    </div>
  );
};

export default Intro;
