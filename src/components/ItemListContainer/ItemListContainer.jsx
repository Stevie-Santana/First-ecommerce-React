import ItemList from "./ItemList"
import db from "../../db/db.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"

import "./ItemListContainer.css"

const ItemListContainer = ({}) => { 
    const [productos, setProductos ] = useState([]);


    const {idCategory} = useParams();

    //obtener los productos de firebase
    const obtenerProductos = () => {
        const productosRef = collection(db, "productos");
            getDocs(productosRef).then((respuesta) => {
                const data = respuesta.docs.map((productosDb) => {
                    return { id: productosDb.id, ...productosDb.data() }
                });

            setProductos(data);
            });
        
    };

    const obtenerProductosFiltrados = () => {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("category", "==", idCategory));
        getDocs(q).then((respuesta) => {
            const data = respuesta.docs.map((productosDb) => {
            return { id: productosDb.id, ...productosDb.data()}
            });
            setProductos(data);
        });
    };


    useEffect( ()=> {

        if(idCategory){
            obtenerProductosFiltrados()
        }else{
            obtenerProductos();
        }

    }, [idCategory]);



    return (
       // <div className="news">  </div>

       <div className="list-products" > 
        <ItemList productos={productos} />
      
       </div>
            
    )
};

export default ItemListContainer;
