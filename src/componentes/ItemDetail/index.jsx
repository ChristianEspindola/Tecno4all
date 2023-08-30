import { useContext, useState } from "react";
import ItemCount from "../ItemCount";
import { CarritoContext } from "../../context/CarritoContext";

const ItemDetail = ({ item }) => {
  const { carrito, Agregar } = useContext(CarritoContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const RestarCantidad = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const SumarCantidad = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="Container">
      <div className="detalleProducto">
        <img className="imagen" src={item.imagen} alt={item.nombre} />
        <div>
          <h3 className="Titulo">{item.nombre}</h3>
          <p className="categoria">
            Sistema Operativo: {item.SistemaOperativo}
          </p>
          <p className="descripcion">{item.descripcion}</p>
          <p className="precio"> ${item.precio}</p>
          <ItemCount
            cantidad={cantidad}
            RestarCantidad={RestarCantidad}
            SumarCantidad={SumarCantidad}
            Agregar={() => {
              Agregar(item, cantidad);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
