const ItemCount = ({ cantidad, RestarCantidad, SumarCantidad, Agregar }) => {
  return (
    <div className="container-item-count">
      <div className="item-count">
        <button onClick={RestarCantidad}>
          <i className="bi bi-patch-minus"></i>
        </button>
        <p>{cantidad}</p>
        <button onClick={SumarCantidad}>
          {" "}
          <i className="bi bi-patch-plus"></i>
        </button>
      </div>
      <button className="add-carrito" onClick={Agregar}>
        {" "}
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
