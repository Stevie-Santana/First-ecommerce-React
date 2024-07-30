import obtenerProductos from "../../data/data.js"
import ItemList from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

import "./ItemListContainer.css"

const ItemListContainer = ({}) => { 
    const [productos, setProductos ] = useState([]);
    const {idCategory} = useParams();

console.log(idCategory)

    useEffect( ()=> {
        obtenerProductos()
    .then( (respuesta ) => {
        if(idCategory){
            const productosFiltrados = respuesta.filter((producto) => producto.category === idCategory)
            setProductos(productosFiltrados)
        }else{
            setProductos (respuesta);
        }
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () =>{
        console.log("finalizo la promesa")
    })


    }, [idCategory]);



    return (
       // <div className="news">  </div>

       <div className="list-products" > 
        <ItemList productos={productos} />
      
       </div>
            
    )
};

export default ItemListContainer;
