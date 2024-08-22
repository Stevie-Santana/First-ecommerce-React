import {BrowserRouter, Routes, Route  } from "react-router-dom";
import { CartProvider } from "./Context/CartContext";
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from "./components/Carrito/Carrito";
import Checkout from "./components/Checkout/Checkout";
import Footer from "./components/Footer/Footer";

import { ToastContainer } from 'react-toastify';

import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';


function App() {


  return (
      <BrowserRouter> 
      <CartProvider>
         <NavBar/>
         <ToastContainer theme='dark' />

        <Routes> 
          <Route path ="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
          <Route path='/carrito' element={<Carrito/>} />
          <Route path='/checkout' element={<Checkout/>} />
        </Routes>

        <Footer/> 
        </CartProvider>     
      </BrowserRouter>
      
      
  ) 
};

export default App;
