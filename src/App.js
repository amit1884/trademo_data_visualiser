import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import Topbar from "./components/Navbar/Topbar";
import "./App.scss";
import Loader from "./components/Loader/Loader";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

// Lazy load components
const Product = lazy(() => import("./pages/Products/Product"));
const Supplies = lazy(() => import("./pages/Supplies/Supplies"));
const Shipment = lazy(() => import("./pages/Shipment/Shipment"));
const NotFound = lazy(() => import("./pages/NotFound/NotFound"));
const ComingSoon = lazy(() => import("./components/ComingSoon/ComingSoon"));

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Sidebar />
        <div className="main">
          <Topbar />
          <ScrollToTop />
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route exact path="/" element={<Product />} />
              <Route exact path="/supplies" element={<Supplies />} />
              <Route exact path="/shipment" element={<Shipment />} />
              <Route exact path="/setting" element={<ComingSoon />} />
              <Route exact path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
