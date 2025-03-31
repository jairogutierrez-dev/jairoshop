import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Item = ({ producto }) => {
  const { agregarAlCarrito } = useContext(CartContext);

  const handleAgregar = () => {
    agregarAlCarrito(producto, 1);
  };

  return (
    <div className="producto">
      <img className="producto-imagen" src={producto.imagen} alt="" />
      <div className="producto-detalles">
        <h3 className="producto-titulo">{producto.titulo}</h3>
        <p className="producto-precio">{producto.precio} $</p>
        <button className="producto-agregar" onClick={handleAgregar}>
          Agregar
        </button>
      </div>
    </div>
  );
};

export default Item;
