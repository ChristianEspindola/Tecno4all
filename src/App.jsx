import Layout from "./componentes/Layout";
import Navbar from "./componentes/Navbar";
import Footer from "./componentes/Footer";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Nosotros from "./componentes/Nosotros/index";
import Carrito from "./componentes/Carrito";
import CheckOut from "./componentes/CheckOut";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import { CarritoProvider } from "./context/CarritoContext";

import "./componentes/ItemListContainer/ItemListContainer.css";
import "./componentes/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./componentes/Item/Item.css";
import "./componentes/Nosotros/Nosotros.css";
import "./componentes/Footer/Footer.css";
import "./componentes/ItemDetail/ItemDetail.css";
import "./componentes/ItemCount/ItemCount.css";
import "./componentes/Carrito/Carrito.css";
import "./componentes/CheckOut/CheckOut.css";
import "./componentes/Cartwidget/Cartwidget.css";

function App() {
  return (
    <div>
      <CarritoProvider>
        <BrowserRouter>
          <Layout>
            <Navbar />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/productos" element={<ItemListContainer />} />
              <Route path="/productos/:marca" element={<ItemListContainer />} />
              <Route path="/nosotros" element={<Nosotros />} />
              <Route path="/carrito" element={<Carrito />} />
              <Route path="/checkout" element={<CheckOut />} />
            </Routes>
            <Footer />
          </Layout>
        </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
