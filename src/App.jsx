import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home.jsx";
import ProductListing from "./pages/ProductListing.jsx";
import ProductDetails from "./pages/ProductDetails.jsx";
import Breadcrumb from "./components/Breadcrumb.jsx";

function App() {
  return (
    <>
      <Breadcrumb />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
