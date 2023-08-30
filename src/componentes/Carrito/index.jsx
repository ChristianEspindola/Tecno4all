import React, { useContext } from "react";
import { CarritoContext } from "../../context/CarritoContext";
import { Link } from "react-router-dom";

const Carrito = () => {
  const { carrito, vaciarCarrito, calcularPrecioTotal, eliminarProducto } =
    useContext(CarritoContext);

  const vaciar = () => {
    vaciarCarrito();
  };

  const handleEliminarProducto = (id) => {
    eliminarProducto(id);
  };

  return (
    <div className="container">
      <h1>Carrito</h1>
      <hr />

      {carrito.map((prod, index) => (
        <div key={index} className="ProductoCarrito">
          <img className="ImagenCarrito" src={prod.imagen} alt={prod.nombre} />

          <div className="InfoProducto">
            <h3>{prod.nombre}</h3>
            <h4>Precio: {prod.precio}usdt</h4>
            <h4>Cantidad: {prod.cantidad}</h4>
            <h4>Precio total: {prod.precio * prod.cantidad}usdt</h4>
            <button
              className="eliminarproducto"
              onClick={() => handleEliminarProducto(prod.id)}
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
      {carrito.length > 0 ? (
        <>
          <h2>Precio Total: {calcularPrecioTotal()}usdt</h2>
          <button onClick={vaciar} className="vaciar">
            Vaciar Carrito
          </button>
          <button className="finalizarCompra">
            {" "}
            <Link to="/checkout">Finalizar compra</Link>
          </button>
        </>
      ) : (
        <h2>El carrito se encuentra vacio</h2>
      )}
    </div>
  );
};

export default Carrito;
