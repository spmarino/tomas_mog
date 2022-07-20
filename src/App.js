import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import NavBar from './Componentes/NavBar/NavBar';
import ItemListContent from './Componentes/Containers/ItemListContent/ItemListContent';
import Cart from './Componentes/Cart/Cart';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemDetailContent from './Componentes/Containers/ItemDetailConten/ItemDetailContent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartContextProvider from './Componentes/CartContext/CartContex';
import Forms from './Componentes/Form/Forms';
import Pay from './Componentes/Pay/Pay';


function App() {
  return(
      <CartContextProvider>   
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index path="/" element={<ItemListContent />} />
              <Route index path="/categoria/:id" element={<ItemListContent />} />
              <Route path="/detalle/:id" element={<ItemDetailContent />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pay" element={<Pay />}/> 
            </Routes> 
        </BrowserRouter>
      </CartContextProvider>  
  );
}

export default App;
