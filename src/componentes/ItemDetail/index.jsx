const ItemDetail = ({ item }) => {
  return (
    <div className="Container">
      <div className="detalleProducto">
        <img src={item.imagen} alt={item.nombre} />
        <div>
          <h3 className="Titulo">{item.nombre}</h3>
          <p className="categoria">
            Sistema Operativo: {item.SistemaOperativo}
          </p>
          <p className="descripcion">{item.descripcion}</p>
          <p className="precio"> ${item.precio}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
