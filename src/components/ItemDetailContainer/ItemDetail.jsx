import { useContext } from "react";
import { CartContext } from "../../Context/CartContext";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    const { agregarProductos} = useContext(CartContext);

    const agregarAlCarrito = (contador) => {
        const productoCarrito = {
            ...producto, cantidad: contador,
        };

        agregarProductos(productoCarrito);
    };

    return ( 
        <div className="item-detail">
            <div className="image">
                <img src={producto.img} alt="" />
            </div>
            <div className="detail">
            <h1 className="title">{producto.name} </h1>
            <p>{producto.autor} </p>
            <p>{producto.year} </p>
            <p>{producto.description}</p>
            <p>{producto.price}</p>
            <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock}/>

            </div>
        </div>
    )
}

export default ItemDetail; 