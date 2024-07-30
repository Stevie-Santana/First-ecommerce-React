import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
//import ItemCount from './components/ItemCount/ItemCount';
import {BrowserRouter, Routes, Route  } from "react-router-dom";


function App() {

const agregarAlCarrito = (count) => {
console.log(count)
}

  return (
      <BrowserRouter> 
        <NavBar/>

        <Routes> 
          <Route path ="/" element={<ItemListContainer/>} />
          <Route path="/category/:idCategory" element={<ItemListContainer/>} />
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer />} />
        
        </Routes>

      </BrowserRouter>
      
  ) 
}

export default App;
