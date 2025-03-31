// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // Importa el componente App
import "./main.css"; // Si tienes un archivo de estilos

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //   <React.StrictMode>
  <App />
  //   </React.StrictMode>
);
