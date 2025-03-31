import React, { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { useForm } from "react-hook-form";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../firebase/config";

const Checkout = () => {
  const [pedidoId, setPedidoId] = useState("");
  const { carrito, precioTotal, vaciarCarrito } = useContext(CartContext);

  const { register, handleSubmit } = useForm();

  const comprar = (data) => {
    const pedido = {
      cliente: data,
      productos: carrito,
      total: precioTotal(),
    };
    console.log(pedido);

    const pedidosRef = collection(db, "pedidos");

    //con esto enviamos los datos del pedido a nuestra base de firebase
    //esto es una promesa que nos devuelve el pedido que hemos enviaod a la base de datos
    addDoc(pedidosRef, pedido).then((doc) => {
      setPedidoId(doc.id);
      vaciarCarrito();
    });
  };

  if (pedidoId) {
    return (
      <div className="container">
        <h1 className="main-title">Muchas gracias por tu compra</h1>
        <p>tu numero de pedido es : {pedidoId}</p>
      </div>
    );
  }

  return (
    <main>
      <div className="container">
        <p className="carrito-vacio">Muchas gracias por tu compra </p>
      </div>
    </main>
  );
};

export default Checkout;
