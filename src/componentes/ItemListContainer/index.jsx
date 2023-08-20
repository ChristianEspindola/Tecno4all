import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

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
    const productosfire = collection(db, "productos");

    getDocs(productosfire).then((resp) => {
      const datos = resp.docs.map((prod) => ({ id: prod.id, ...prod.data() }));
      setProductos(datos);
      console.log(datos, "esto");
    });
  }, [marca]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};
export default ItemListContainer;
