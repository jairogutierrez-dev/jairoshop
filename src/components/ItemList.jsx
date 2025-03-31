import Item from "./Item";
import { toCapital } from "../helpers/toCapital";

const ItemList = ({ productos, titulo }) => {
  return (
    <main>
      {/* titulo que sale en el despliegue de todos los productos */}
      <h2 className="titulo-principal">{toCapital(titulo)}</h2>
      <div className="contenedor-productos">
        {productos.map((prod) => (
          <Item producto={prod} key={prod.id}></Item>
        ))}
      </div>
    </main>
  );
};

export default ItemList;
