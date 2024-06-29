import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import ProductView from "./pages/ProductView";
import AllProducts from "./pages/AllProducts";
import About from "./pages/About";
import Sale from "./pages/Sale";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/product" element={<ProductView />} />
          <Route path="/AllProducts" element={<AllProducts />} />
          <Route path="/About" element={<About />} />
          <Route path="/Sale" element={<Sale />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
