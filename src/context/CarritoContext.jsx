import { createContext, useEffect, useState } from "react";

export const CarritoContext = createContext();

const carritoInicial = JSON.parse(localStorage.getItem("carrito")) || [];

export const CarritoProvider = ({ children }) => {
  const [carrito, setCarrito] = useState([carritoInicial]);

  const Agregar = (item, cantidad) => {
    const intemAgregado = { ...item, cantidad };
    const EnelCarrito = carrito.find(
      (producto) => producto.id === intemAgregado.id
    );
    const NewCarrito = [...carrito];

    if (EnelCarrito) {
      EnelCarrito.cantidad += cantidad;
    } else {
      NewCarrito.push(intemAgregado);
    }
    setCarrito(NewCarrito);
  };

  const CantidadEnElcarrito = () => {
    carrito.reduce((acumulador, prod) => acumulador + prod.cantidad, 0);
  };

  const vaciarCarrito = () => {
    setCarrito([]);
  };

  const calcularPrecioTotal = () => {
    return carrito.reduce(
      (acumulador, prod) => acumulador + prod.precio * prod.cantidad,
      0
    );
  };

  useEffect(() => {
    localStorage.setItem("carrito", JSON.stringify(carrito));
  }, [carrito]);

  return (
    <CarritoContext.Provider
      value={{
        carrito,
        Agregar,
        CantidadEnElcarrito,
        vaciarCarrito,
        calcularPrecioTotal,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
