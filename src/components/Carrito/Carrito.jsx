import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";

import "./Carrito.css";


const Carrito = () => { 
    const { carrito, borrarProductoPorId, vaciarCarrito, precioTotal } = useContext(CartContext);

    if (carrito.length === 0) {
        return (
            <div className="cart">
                <h5>El carrito esta vacio</h5>
                <Link className="continue-cart" to="/"><p>Ver productos</p></Link>
            </div>
        );
    }


return (
    <div className="cart">
        <div className="cart-title"><p>RESUMEN DE COMPRAS</p></div>
               

        <div className="cart-detail">
        {carrito.map((productoCarrito) => (
            <div className="card-cart" key={productoCarrito.id} >
            <img width={150} src={productoCarrito.img} alt="" />
            <h5>{productoCarrito.name}</h5>
            <p>cantidad: {productoCarrito.cantidad} </p>
            <p>precio c/u: ${productoCarrito.price} </p>
            <p>Precio parcial: {productoCarrito.price * productoCarrito.cantidad} </p>

            
            <button className="delete" onClick={() => borrarProductoPorId(productoCarrito.id)}>Borrar</button> 
            </div>
          ))}

        </div>
        <h5>Precio Total: {precioTotal()} </h5>
          <button className="empty-cart" onClick={ vaciarCarrito }>
            <p>Vaciar carrito</p>
          </button>
          <div className="resume">
          <Link className="continue-cart" to="/checkout"><h6>Continuar con la compra</h6></Link>
          </div>
        </div>

        );
    };

   


export default Carrito;