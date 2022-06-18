import { BrowserRouter, Route, Routes } from 'react-router-dom';

import NavBar from './Componentes/NavBar/NavBar';
import ItemListContent from './Componentes/Containers/ItemListContent/ItemListContent';
import Cart from './Componentes/Cart/Cart';
import ItemCount from './Componentes/ItemCount/ItemCount';
import ItemDetailContent from './Componentes/Containers/ItemDetailConten/ItemDetailContent';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
        <BrowserRouter>
            <NavBar />
            <Routes>
              <Route index path="/" element={<ItemListContent />} />
              <Route index path="/categoria/:id" element={<ItemListContent />} />
              <Route path="/carrito/:id" element={<Cart />} />
              <Route path="/detalle/:id" element={<ItemDetailContent />} />
            </Routes> 
            
        </BrowserRouter>
  );
}

export default App;
