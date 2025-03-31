import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import CarritoItem from "./CarritoItem";

const Carrito = () => {
  const navigate = useNavigate();
  const { finalizarCompra, carrito, precioTotal, vaciarCarrito } =
    useContext(CartContext);

  const handleVaciar = () => {
    vaciarCarrito();
  };

  const handleFinalizarCompra = () => {
    finalizarCompra();
    navigate("/checkout");
  };

  return (
    <main>
      <h1 className="titulo-principal">Carrito</h1>
      <div className="contenedor-carrito">
        <div className="carrito-productos">
          {carrito.map((prod) => (
            <CarritoItem prod={prod} key={prod.id}></CarritoItem>
          ))}
        </div>

        {/* Parte que cambia cuando el carrito por completo esta vacio */}
        {carrito.length > 0 ? (
          <div className="carrito-acciones">
            <div className="carrito-acciones-izquierda">
              <button
                onClick={handleVaciar}
                className="carrito-acciones-vaciar"
              >
                Vaciar carrito
              </button>
            </div>
            <div className="carrito-acciones-derecha">
              <div className="carrito-acciones-total">
                <p>Total:</p>
                <p>${precioTotal()}</p>
              </div>
              {
                <button
                  className="carrito-acciones-comprar"
                  onClick={handleFinalizarCompra}
                >
                  Finalizar compra
                </button>
              }
              {/* <Link className="carrito-acciones-comprar" to="/checkout">
                Finalizar compra
              </Link> */}
            </div>
          </div>
        ) : (
          <p className="carrito-vacio">El carrito esta vacio </p>
        )}
      </div>
    </main>
  );
};

export default Carrito;
