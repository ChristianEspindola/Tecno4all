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
  const marca = useParams().marca;
  console.log(marca);

  useEffect(() => {
    InfoDatos().then((res) => {
      setProductos(res);
    });
  }, []);

  return (
    <div>
      <ItemList productos={productos} />
    </div>
  );
};
export default ItemListContainer;
