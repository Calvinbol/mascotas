import { useState } from "react";
import { signup } from "../../Services/auth.service";
import { useNavigate } from "react-router-dom";

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
        if (
          /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)
        ) {
          await signup(email, fullname, password);
          setErrs("");
          alert("Chachi piruli");
        } else {
          setErrs(
            "pass with at least 8 char: 1 caracter especial, 1 minuscula, 1 mayus"
          );
        }
        // Optionally, handle successful signup (e.g., display a success message or redirect)
      } catch (error) {
        setErrs(error.message);
      }
    } else {
      setErrs("Las contraseñas no coinciden");
    }
  }

  return (
    <>
      <h1>SIGNUP</h1>
      <button
        onClick={function () {
          navigate("/");
        }}
      >
        VOLVER A HOME
      </button>
      <form className="form">
        <input
          className="email"
          placeholder="Introduce tu email"
          type="email"
          onChange={function (event) {
            setEmail(event.target.value);
          }}
        />
        <input
          placeholder="Introduce tu nombre completo"
          onChange={function (event) {
            setFullname(event.target.value);
          }}
        />
        <input
          placeholder="Introduce tu contraseña"
          type="password"
          onChange={function (event) {
            setPassword(event.target.value);
          }}
        />

        {password}
        <input
          placeholder="Repite tu contraseña"
          type="password"
          onChange={function (event) {
            setDoublePass(event.target.value);
          }}
        />

        {errs && <p className="error">{errs}</p>}

        <button onClick={handleClick}>Enviar</button>

        <p>Tienes cuenta </p>
        <a
          onClick={function () {
            navigate("/login");
          }}
        >
          Haz click aquí
        </a>
      </form>

      <button
        onClick={function () {
          navigate("/");
        }}
      >
        VOLVER A HOME
      </button>
    </>
  );
}

export default Signup;