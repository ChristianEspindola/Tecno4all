import React from "react";
import Layout from "./componentes/Layout";
import Navbar from "./componentes/navbar";
import ItemListContainer from "./componentes/ItemListContainer";
import "./componentes/Navbar/Navbar.css";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    <>
      <Layout>
        <Navbar />
        <ItemListContainer message={message} />
      </Layout>
    </>
  );
}

export default App;
