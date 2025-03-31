import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import CartIcon from "./icons/Cart";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div>
      <NavLink className="boton-menu boton-carrito" to="/carrito">
        <CartIcon></CartIcon>Carrito
        <span className="numerito"> {cantidadEnCarrito()}</span>
      </NavLink>
    </div>
  );
};

export default CartWidget;
