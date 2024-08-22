import { CartContext } from "../../Context/CartContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaWeightHanging } from "react-icons/fa";
import "./NavBar.css";

const CartWidget = () => {
    
    const { cantidadTotal } = useContext(CartContext)

    let cantidad = cantidadTotal()

    return (
        <Link to="/carrito" className="cartwidget">
          <FaWeightHanging size={40}/>
            <p className="count-shown">{ cantidad > 0 && cantidad }</p>
        </Link>
    )
}

export default CartWidget;
