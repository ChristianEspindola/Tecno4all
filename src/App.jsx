import React from "react";
import Layout from "./componentes/Layout";
import Navbar from "./componentes/navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer";
import Nosotros from "./componentes/Nosotros/Nosotros";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./componentes/ItemListContainer/ItemListContainer.css";
import "./componentes/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./componentes/Item/Item.css";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Layout>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/productos" element={<ItemDetailContainer />} />
            <Route path="/productos/:marca" element={<ItemDetailContainer />} />
            <Route path="/nosotros" element={<Nosotros />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
