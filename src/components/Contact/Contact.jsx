import React from "react";
import "./Contact.css";
import { useRef, useState, useContext } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import Phone from "../../img/telephone.png";
import Gmail from "../../img/gmail.png";
import Address from "../../img/location.png";
import { ThemeContext } from "../../Context";

const MySwal = withReactContent(Swal);

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] = useState(false);
  const theme = useContext(ThemeContext)
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zn2u5qe",
        "template_ht7e5ii",
        formRef.current,
        "user_uEvBVWrC3rjcZDHRxowy9"
      )
      .then(
        (result) => {
           MySwal.fire({
            title: <strong>¡Perfecto!</strong>,
            html: <i>¡Tu mensaje me va a llegar en unos momentos!</i>,
            icon: "success",
          });
          setDone(true);
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: '¡Algo salió mal! Por favor, intentá en unos momentos',
            footer: '<a href="">Why do I have this issue?</a>'
          })
        }
      );
  };
  return (
    <div className="c">
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">Hablemos de tu proyecto</h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src={Phone} alt="" className="c-icon" />
              3512324702
            </div>
            <div className="c-info-item">
              <img src={Gmail} alt="" className="c-icon" />
              facungomez32@gmail.com / facuegomez@hotmail.com
            </div>
            <div className="c-info-item">
              <img src={Address} alt="" className="c-icon" />
              Córdoba Capital - Argentina
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-descrip">
            <b>¿Algo que me quieras decir?</b> Si necesitas ponerte en contacto
            conmigo, siempre estoy disponible para trabajar independientemente
            si surge el proyecto adecuado. ¡Saludos!
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#0c0c0c"}} type="text" placeholder="Nombre" name="user_name" />
            <input style={{backgroundColor: darkMode && "#0c0c0c"}} type="text" placeholder="Asunto" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#0c0c0c"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#0c0c0c"}} name="message" placeholder="Mensaje" rows="5"></textarea>
            <button>Enviar</button>
            {done && <p className="c-descrip">Gracias por el mensaje...</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
