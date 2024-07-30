import { useContext, cartContext } from "react";
import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css"

const ItemDetail = ({ producto }) => {
    const { agregarProductos} = useContext(cartContext);

    const agregarAlCarrito = (contador) => {
        const productoCarrito = {
            ...producto,
            cantidad: contador,
        };

        agregarProductos(productoCarrito);
    };

    return ( 
        <div className="item-detail">
            <div className="image">
                <img src="{producto.img} " alt="" />
            </div>
            <div className="detail">
            <h3>{producto.name} </h3>
            <h4>{producto.autor} </h4>
            <h4>{producto.year} </h4>
            <p>{producto.price}</p>
            <ItemCount agregarAlCarrito={agregarAlCarrito} stock={producto.stock}/>

            </div>
        </div>
    )
}

export default ItemDetail; 