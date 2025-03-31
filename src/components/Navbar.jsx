import React from "react";
import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
import HandIconFill from "./icons/HandFill";
import HandIcon from "./icons/Hand";
import ArrowLeftIcon from "../components/icons/ArrowLeft";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  // const Router = useRoutes();

  const { pathname } = useLocation();

  return (
    <aside>
      <header>
        <Link to="/">
          <h1 className="logo">JairoShop</h1>
        </Link>
      </header>

      <nav>
        {pathname === "/carrito" || pathname === "/checkout" ? (
          <ul className="menu">
            <li>
              <NavLink className="boton-menu boton-volver" to="/">
                <ArrowLeftIcon /> Seguir comprando
              </NavLink>
            </li>
            <li>
              <CartWidget></CartWidget>
            </li>
          </ul>
        ) : (
          <ul className="menu">
            <li>
              <NavLink className="boton-menu boton-categoria" to="/">
                <HandIconFill /> Todos los productos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="boton-menu boton-categoria"
                to="/productos/abrigos"
              >
                <HandIcon /> Abrigos
              </NavLink>
            </li>
            <li>
              <NavLink
                className="boton-menu boton-categoria"
                to="/productos/camisetas"
              >
                <HandIcon /> Camisetas
              </NavLink>
            </li>
            <li>
              <NavLink
                className="boton-menu boton-categoria"
                to="/productos/pantalones"
              >
                <HandIcon /> Pantalones
              </NavLink>
            </li>
            <li className="boton-carrito">
              <CartWidget></CartWidget>
            </li>
          </ul>
        )}
      </nav>
      <footer>
        <p className="texto-footer">© 2025 Jairo Gutierrez</p>
      </footer>
    </aside>
  );
};

export default Navbar;
