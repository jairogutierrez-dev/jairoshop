import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const CartContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CartProvider = ({ children }) => {
  const [carrito, setCarrito] = useState(carritoInicial);

  const mostrarNotificacion = () => {
    toast.success("Producto agregado", {
      position: "top-right", // Equivalente a gravity: "top" y position: "right"
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      closeButton: false,
      icon: false,
      style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem",
        fontWeight: "bold",
        color: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center", // 📍 Centra horizontalmente
        alignItems: "center", // 📍 Centra verticalmente
        textAlign: "center", // 📍 Asegura que el texto esté alineado
        width: "13rem",
      },
    });
  };

  const mostrarNotificacionBorrado = () => {
    toast.success("Producto eliminado", {
      position: "top-right", // Equivalente a gravity: "top" y position: "right"
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      closeButton: false,
      icon: false,
      style: {
        background: "linear-gradient(to right, #4b33a8, #785ce9)",
        borderRadius: "2rem",
        textTransform: "uppercase",
        fontSize: ".75rem",
        fontWeight: "bold",
        color: "#fff",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center", // 📍 Centra horizontalmente
        alignItems: "center", // 📍 Centra verticalmente
        textAlign: "center", // 📍 Asegura que el texto esté alineado
        width: "13rem",
      },
    });
  };

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };
    const nuevoCarrito = [...carrito];
    const estaEnElCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (estaEnElCarrito) {
      //si el producto ya existe se suma la cantidad
      estaEnElCarrito.cantidad += cantidad;
    } else {
      //si el producto no esta en el carrito se agrega el producto dentro del carrito
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);

    mostrarNotificacion();
  };

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);
  };

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  };

  const finalizarCompra = () => {
    setCarrito([]);
  };

  const vaciarCarrito = () => {
    Swal.fire({
      title: "¿Estás seguro?",
      icon: "question",
      html: `Se van a borrar ${cantidadEnCarrito()} productos.`,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: "Sí",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        setCarrito([]);
      }
    });
  };

  const vaciarCarritoProd = (item) => {
    const itemBorrado = { ...item };
    const nuevoCarrito = [...carrito];
    const nuevoCarritoBorrado = nuevoCarrito.filter(
      (producto) => producto.id !== itemBorrado.id
    );
    setCarrito(nuevoCarritoBorrado);

    mostrarNotificacionBorrado();
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CartContext.Provider
      value={{
        carrito,
        agregarAlCarrito,
        cantidadEnCarrito,
        precioTotal,
        vaciarCarrito,
        vaciarCarritoProd,
        finalizarCompra,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
