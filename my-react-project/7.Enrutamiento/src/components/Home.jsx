import React from "react";
import Contents from "./Contents";
import { Link } from "react-router-dom";

const Home = () => {

  const productos = [
    { id: 1, nombre: "Smartphone", precio: 299.99 },
    { id: 2, nombre: "Laptop", precio: 899.99 },
    { id: 3, nombre: "Tablet", precio: 199.99 },
    { id: 4, nombre: "Smartwatch", precio: 149.99 },
    { id: 5, nombre: "Auriculares", precio: 79.99 }
  ]

  return (
    <>
      <h1>Home</h1>
      <Contents />

      <h2>Productos</h2>
      <ul className="list-group">
        {productos.map((producto) => (
          <Link className="list-group-item list-group-item-action" to={"/producto/" + producto.nombre}> {producto.nombre}</Link>
        )
      )}

      </ul>
    </>
  );    
}
export default Home;