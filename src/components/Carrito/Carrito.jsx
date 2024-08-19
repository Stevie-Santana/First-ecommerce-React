import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Carrito.css";


const Carrito = () => { 
    const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="container">
                <h2>El carrito esta vacio</h2>
                <Link to="/">Ver productos</Link>
            </div>
        );
    }


return (
    <div className="cart">
        <h2>Carrito de compras</h2>
        {carrito.map((productoCarrito) => (
            <div className="card-cart" key={productoCarrito.id} >
            <img src={productoCarrito.img} alt="" />
            <h3>{productoCarrito.name}</h3>
            <p>cantidad: {productoCarrito.cantidad} </p>
            <p>precio c/u: ${productoCarrito.price} </p>
            <p>Precio parcial: {productoCarrito.price * productoCarrito.cantidad} </p>

            
            <button onClick={() => borrarProductoPorId(productoCarrito.id)}>Borrar</button> 
            </div>
          ))}

          <p>Precio Total: {precioTotal()} </p>
          <button onClick={ vaciarCarrito }>
            <p>Vaciar carrito</p>
          </button>
          <link className="continue-cart" to="/checkout">Continuar con la compra</link>
        </div>

        );
    };

   


export default Carrito;