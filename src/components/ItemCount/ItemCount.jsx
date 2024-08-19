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
        <div>
            <div>
            <button onClick={disminuir}>-</button>
            <p>{contador}</p>
            <button onClick={aumentar}>+</button>
            </div>

            <button onClick={ () => agregarAlCarrito(contador)} >Agregar al carrito.</button>
        </div>
    )

}

export default ItemCount;