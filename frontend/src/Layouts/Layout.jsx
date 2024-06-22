import React from "react";
import { Link, Outlet } from "react-router-dom";
import PropTypes from "prop-types";
import "./Layout.css";

const Layout = () => {
  return (
    <>
      <header>
        <div className="logo">
          <Link to={"/"}>
            <img src="../../public/Logo.png" alt="Adopta Fácil" />
          </Link>
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/adoptar">Adoptar es</Link>
            </li>
            <li>
              <Link to="/mascotas">Mascotas</Link>
            </li>
            <li>
              <Link to="/contacto">Contáctanos</Link>
            </li>
          </ul>
        </nav>
        <div className="albergue-link">
          <Link to="/login">Soy un albergue</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div className="footer"></div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
