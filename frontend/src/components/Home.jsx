import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-background">
      <div className="text">
        <a className="greyFont">¡Dale una </a>
        <a className="blueBold">nueva </a>
        <p className="greyFont">oportunidad a un </p>
        <a className="blueBold">Perro o Gato y</a>
        <p className="greyFont">transforma tu vida!</p>
        <p className="blueBold"></p>
  
        <Link to="/mascotas">
          <button className="button">Conoce a tu mejor amigo</button>
        </Link>
      </div>
    </div>
  );
  };



export default Home;
