import React from "react";
import Login from "../pages/Login/Login";
import "./Albergue.css";

const Albergue = () => {
  return (
      <>
        <form className="formulario">
          <h2>Contáctanos</h2>
          <label>
            Nombre:
            <input type="text" name="name" className="input" />
          </label>
          <label>
            Email:
            <input type="email" name="email" className="input" />
          </label>
          <label>
            Mensaje:
            <textarea name="message" className="input textarea"></textarea>
          </label>
          <input type="checkbox" className='check'/>
          <button type="submit" className='enviar'>Enviar</button>
        </form>
      </>
    );
};
export default Albergue;
