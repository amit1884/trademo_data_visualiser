import React, { useEffect, useState } from "react";
import { products, shipments, supplies } from "./constants";
import "./App.scss";
import Sidebar from "./components/Navbar/Sidebar";
import Product from "./pages/Products/Product";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Supplies from "./pages/Supplies/Supplies";
import NotFound from "./pages/NotFound/NotFound";
import Shipment from "./pages/Shipment/Shipment";
import Topbar from "./components/Navbar/Topbar";
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
          <Topbar />
          <Routes>
            <Route exact path="/" element={<Product />} />
            <Route exact path="/supplies" element={<Supplies />} />
            <Route exact path="/shipment" element={<Shipment />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
