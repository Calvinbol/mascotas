import React from "react";
import "./Contacto.css";

const Contacto = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("FORMULARIO ENVIADO");
  };

  return (
    <div className="contact-container">
      <form className="formulario" onSubmit={handleSubmit}>
        <h2>Contáctanos</h2>
        <label>
          Nombre:
          <input type="text" name="name" className="input" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" className="input" required />
        </label>
        <label>
          Mensaje:
          <textarea name="message" className="textarea" required></textarea>
        </label>
        <label className="check-container">
          <input type="checkbox" className="check" required />
          Acepto los términos y condiciones
        </label>
        <button type="submit" className="enviar">Enviar</button>
      </form>
    </div>
  );
};

export default Contacto;
