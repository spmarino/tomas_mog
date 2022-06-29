import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet";

import NavBar from "./Componentes/NavBar/NavBar";
import ItemListContent from "./Componentes/Containers/ItemListContent/ItemListContent";
import Cart from "./Componentes/Cart/Cart";
import ItemCount from "./Componentes/ItemCount/ItemCount";
import ItemDetailContent from "./Componentes/Containers/ItemDetailConten/ItemDetailContent";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import CartContextProvider from "./Componentes/CartContext/CartContex";

function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContent />} />
          <Route path="/categoria/:id" element={<ItemListContent />} />
          <Route path="/detalle/:id" element={<ItemDetailContent />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
    </CartContextProvider>
  );
}

export default App;
