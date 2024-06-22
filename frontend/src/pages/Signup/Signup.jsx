import { useState } from "react";
import { signup } from "../../Services/auth.service";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

function Signup() {
  const [fullname, setFullname] = useState("");
  const [password, setPassword] = useState("");
  const [doublePass, setDoublePass] = useState("");
  const [email, setEmail] = useState("");
  const [errs, setErrs] = useState(""); //Para mostrar si hay algún error

  const navigate = useNavigate();

  async function handleClick(event) {
    event.preventDefault();
    if (password === doublePass) {
      try {
        if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)) {
          await signup(email, fullname, password);
          setErrs("");
          alert("Registro exitoso");
          navigate("/login");
        } else {
          setErrs("La contraseña debe tener al menos 8 caracteres: 1 caracter especial, 1 minúscula, 1 mayúscula");
        }
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Las contraseñas no coinciden");
    }
  }

  return (
    <div className="signup-container">
      <form className="form">
        <h2 className="form-title">Registro</h2>
        <label className="form-label">Correo Electrónico:</label>
        <input
          className="form-input"
          placeholder="Introduce tu email"
          type="email"
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className="form-label">Nombre Completo:</label>
        <input
          className="form-input"
          placeholder="Introduce tu nombre completo"
          onChange={(event) => setFullname(event.target.value)}
        />
        <label className="form-label">Contraseña:</label>
        <input
          className="form-input"
          placeholder="Introduce tu contraseña"
          type="password"
          onChange={(event) => setPassword(event.target.value)}
        />
        <label className="form-label">Repite tu Contraseña:</label>
        <input
          className="form-input"
          placeholder="Repite tu contraseña"
          type="password"
          onChange={(event) => setDoublePass(event.target.value)}
        />

        {errs && <p className="form-error">{errs}</p>}

        <button className="form-button" onClick={handleClick}>Enviar</button>

        <p className="form-text">¿Ya tienes cuenta? <span className="form-link" onClick={() => navigate("/login")}>Inicia sesión</span></p>
      </form>
    </div>
  );
}

export default Signup;
