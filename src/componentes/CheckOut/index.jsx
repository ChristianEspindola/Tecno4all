import React, { useContext, useState } from "react";
import { collection, addDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/config";
import { CarritoContext } from "../../context/CarritoContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

function CheckOut() {
  const { carrito, vaciarCarrito, calcularPrecioTotal } =
    useContext(CarritoContext);

  const { register, handleSubmit } = useForm();

  const Comprar = async (data) => {
    const pedidoCliente = {
      cliente: data,
      productos: carrito,
      total: calcularPrecioTotal(),
    };
    console.log(pedidoCliente);

    const pedidoC = collection(db, "pedidos");

    try {
      const docRef = await addDoc(pedidoC, pedidoCliente);

      Swal.fire({
        icon: "success",
        title: `¡Gracias por tu compra, ${data.nombre}!`,
        text: `Tu pedido ha sido registrado exitosamente, id:${docRef.id} `,
      });
    } catch (error) {
      console.error("Error al agregar el pedido:", error);
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Hubo un problema al registrar tu pedido.",
      });
    }
  };

  return (
    <div className="containerForm">
      <h2>Finalizar Compra</h2>
      <form className="formulario" onSubmit={handleSubmit(Comprar)}>
        <input
          type="text"
          placeholder="Ingresá tu nombre"
          {...register("nombre")}
        />
        <input
          type="email"
          placeholder="Ingresá tu e-mail"
          {...register("email")}
        />
        <input
          type="phone"
          placeholder="Ingresá tu Celular"
          {...register("telefono")}
        />
        <button className="buttonCarrito">
          <Link className="nav-link" to="/carrito">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-cart4"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>{" "}
            volver al carrito
          </Link>
        </button>
        <button className="comprar" type="submit">
          Comprar
        </button>
      </form>
    </div>
  );
}

export default CheckOut;
