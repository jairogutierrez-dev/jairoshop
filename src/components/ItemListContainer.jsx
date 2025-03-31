import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("Todos los productos");
  const categoria = useParams().categoria;

  useEffect(() => {
    //llamado a la base de datos de la coleccion con el nombre de "productos"
    const productosRef = collection(db, "productos");

    const q = categoria
      ? query(productosRef, where("categoria.id", "==", categoria))
      : productosRef;

    //asiganamos los productos a la variable productos y le anadimos el id, que solo estaba presente en firestore
    getDocs(q).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        })
      );
    });

    categoria ? setTitulo(categoria) : setTitulo("Todos los productos");
  }, [categoria]);

  return <ItemList productos={productos} titulo={titulo}></ItemList>;
};

export default ItemListContainer;
