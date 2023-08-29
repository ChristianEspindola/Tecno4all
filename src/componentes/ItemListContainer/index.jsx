import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

export const InfoDatos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 500);
  });
};

///ver el tema del loader

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);

  const [titulo, setTitulo] = useState("productos");

  const marca = useParams().marca;

  useEffect(() => {
    const productosfire = collection(db, "productos");

    const querryy = marca
      ? query(productosfire, where("marca", "==", marca))
      : productosfire;

    getDocs(querryy).then((resp) => {
      setProductos(
        resp.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        })
      );
    });
  }, [marca]);

  return (
    <div>
      <ItemList productos={productos} titulo={titulo} />
    </div>
  );
};
export default ItemListContainer;
