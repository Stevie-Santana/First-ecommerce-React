import ItemList from "./ItemList"
import db from "../../db/db.js"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from "firebase/firestore"

import "./ItemListContainer.css"

const ItemListContainer = ({}) => { 
    const [productos, setProductos ] = useState([]);
    const [ estaCargando, setEstaCargando ]  = useState(false);


    const {idCategory} = useParams(); 

    const getProducts = async () => {
        try {
            const productosRef = collection(db, "productos");
            const dataDb = await getDocs(productosRef);

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data()}
            });

            setProductos(data);
            setEstaCargando(false);
        } catch (error) {
            console.log(error);
        }
    };

    const getProductsByCategory = async () => {
        try {
            const productosRef = collection(db, "productos");
            const q = query(productosRef, where("category", "==", idCategory));
            const dataDb = await getDocs(q);

            const data = dataDb.docs.map((productDb) => {
                return { id: productDb.id, ...productDb.data()};
            });

            setProductos(data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        setEstaCargando(true);
        if (idCategory) {
            getProductsByCategory();
        } else {
            getProducts();
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
