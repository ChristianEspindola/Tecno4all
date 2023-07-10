import React from "react";
import Layout from "./componentes/Layout";
import Navbar from "./componentes/navbar";
import ItemListContainer from "./componentes/ItemListContainer";

import "./componentes/ItemListContainer/ItemListContainer.css";
import "./componentes/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <ItemListContainer message={"Bienvenidos"} />
      </Layout>
    </>
  );
}

export default App;
