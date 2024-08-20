import { useContext, useState } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"
import { Link } from "react-router-dom";

const ItemDetail = ({ producto }) => {
    const { agregarProductos} = useContext(CartContext);
    const [ mostrarItemCount, setMostrarItemCount] = useState(true);


    const agregarAlCarrito = (contador) => {
        const productoCarrito = {
            ...producto, cantidad: contador,
        };

        agregarProductos(productoCarrito);
        setMostrarItemCount(false);
    };

    return ( 
        <div className="item-detail">
            <div className="image">
                <img src={producto.img} height={500} alt="" />
            </div>
            <div className="detail">
            <h1 className="title">{producto.name} </h1>
            <p>{producto.autor} </p>
            <p>{producto.year} </p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>

            {mostrarItemCount ? ( 
            <ItemCount agregarAlCarrito={agregarAlCarrito}/>
        ) : ( 
            <Link to="/carrito"> Ir al carrito</Link>
         ) } </div>
        </div>
    );
};

export default ItemDetail; 