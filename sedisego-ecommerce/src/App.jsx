import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Layout from "./components/Layout";
import ProductView from "./pages/ProductView";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Index />} />
          <Route path="/product" element={<ProductView />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
