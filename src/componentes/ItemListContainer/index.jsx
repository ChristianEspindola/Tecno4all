import { useEffect, useState } from "react";
import ItemList from "../ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../firebase/config";

const ItemListContainer = () => {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  const [titulo, setTitulo] = useState("productos");

  const marca = useParams().marca;

  useEffect(() => {
    const productosfire = collection(db, "productos");

    const querryy = marca
      ? query(productosfire, where("marca", "==", marca))
      : productosfire;

    getDocs(querryy)
      .then((resp) => {
        setProductos(
          resp.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => {
        setLoading(false);
      });
  }, [marca]);

  return (
    <div>
      {loading ? (
        <div className="containerPelotitas">
          <div className="cargando">
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <div className="pelotas"></div>
            <span className="texto-cargando">Cargando...</span>
          </div>
        </div>
      ) : (
        <ItemList productos={productos} titulo={titulo} />
      )}
    </div>
  );
};
export default ItemListContainer;
