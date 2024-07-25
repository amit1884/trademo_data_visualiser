import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import Product from "./pages/Products/Product";
import Supplies from "./pages/Supplies/Supplies";
import NotFound from "./pages/NotFound/NotFound";
import Shipment from "./pages/Shipment/Shipment";
import Topbar from "./components/Navbar/Topbar";
import ComingSoon from "./components/ComingSoon/ComingSoon";
import "./App.scss";

const App = () => {
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
            <Route exact path="/setting" element={<ComingSoon />} />
            <Route exact path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
