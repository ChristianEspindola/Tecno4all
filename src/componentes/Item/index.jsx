import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  return (
    <section>
      <div className="producto">
        <br />
        <img className="imagen" src={producto.imagen} />
        <h4 className="nombre"> {producto.nombre} </h4>
        <h4 className="precio">Precio: {producto.precio} USDT </h4>

        <Link className="detalles" to={`/item/${producto.id}`}>
          {" "}
          Ver mas{" "}
        </Link>
      </div>
    </section>
  );
};

export default Item;
