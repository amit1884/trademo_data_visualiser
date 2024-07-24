import React, { useEffect, useState } from "react";
import { products, shipments, supplies } from "./constants";
import "./App.scss";
import Sidebar from "./components/Navbar/Sidebar";
import Product from "./pages/Products/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Supplies from "./pages/Supplies/Supplies";
const App = () => {
  const [productData, setProductData] = useState([]);
  const [supplyData, setSupplyData] = useState([]);
  const [shipmentData, setShipmentData] = useState([]);

  useEffect(() => {
    setProductData(products);
    setSupplyData(supplies);
    setShipmentData(shipments);
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div className="main">
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/supplies" element={<Supplies />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
