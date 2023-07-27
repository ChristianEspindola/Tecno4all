import { useEffect, useState } from "react";
import data from "../../data/data.json";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

export const InfoDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};
///
export const ItemPorID = (id) => {
  return new Promise((resolve, reject) => {
    const item = data.find((el) => el.id === id);
    if (item) {
      resolve(item);
    } else {
      reject({
        error: "Producto no encontrado",
      });
    }
  });
};
////
const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [titulo, setTitulo] = useState("productos");

  const marca = useParams().marca;

  useEffect(() => {
    InfoDatos().then((res) => {
      if (marca) {
        setProductos(res.filter((prod) => prod.marca === marca));
        setTitulo(marca);
      } else {
        setProductos(res);
        setTitulo("productos");
      }
    });
  }, [marca]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};
export default ItemListContainer;
