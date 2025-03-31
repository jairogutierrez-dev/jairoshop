import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import TrashIcon from "./icons/Trash";

const CarritoItem = ({ prod }) => {
  const { vaciarCarritoProd } = useContext(CartContext);

  const handleBorrarProducto = () => {
    vaciarCarritoProd(prod);
  };

  return (
    <div className="carrito-producto">
      <img
        className="carrito-producto-imagen"
        src={prod.imagen}
        alt={prod.imagen}
      />
      <div className="carrito-producto-titulo">
        <small>Nombre</small>
        <h3>{prod.titulo}</h3>
      </div>
      <div className="carrito-producto-cantidad">
        <small>Cantidad</small>
        <p>{prod.cantidad}</p>
      </div>
      <div className="carrito-producto-precio">
        <small>Precio</small>
        <p>${prod.precio}</p>
      </div>
      <div className="carrito-prducto-subtotal">
        <small>Subtotal</small>
        <p>{prod.precio * prod.cantidad}</p>
      </div>
      <button
        className="carrito-producto-eliminar"
        onClick={handleBorrarProducto}
      >
        <TrashIcon />
      </button>
    </div>
  );
};

export default CarritoItem;
