import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import {BrowserRouter, Routes, Route  } from "react-router-dom";

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';


import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";
import { CartProvider } from "./Context/CartContext";


function App() {


  return (
      <BrowserRouter> 
      <CartProvider>
        
        <NavBar/>

        <Routes> 
          <Route path ="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>
        </CartProvider>

      </BrowserRouter>
      
  ) 
}

export default App;
