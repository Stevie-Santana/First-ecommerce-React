import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import bag from "./bag.png"

const CartWidget = () => {
    
    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/carrito" className="cartwidget">
          <img  className="cart" src= {bag}  alt="" />
            <p className="count">{ cantidad > 0 && cantidad }</p>
        </Link>
    )
}

export default CartWidget;
