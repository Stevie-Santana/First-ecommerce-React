import { useState } from "react";

const ItemCount = ({stock, agregarAlCarrito}) => {
    const [contador, setContador] = useState(1);

    const aumentar = () => {
        if(contador < stock){
            setContador(contador + 1); 
        }   
    };

    const disminuir = () => {
        if (contador > 1) {
            setContador(contador - 1);
      }
    };

    return(
        <div className="item-count">
            <div className="count">
            <button className="rest-add-button" onClick={disminuir}>-</button>
            <p>{contador}</p>
            <button className="rest-add-button" onClick={aumentar}>+</button>
            </div>
            <div className="count"> 
            <button className="add-button" onClick={ () => agregarAlCarrito(contador)} >Agregar al carrito.</button>
            </div>
        </div>
    )

}

export default ItemCount;