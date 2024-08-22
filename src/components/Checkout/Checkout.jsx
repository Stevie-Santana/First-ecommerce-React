import { useState, useContext } from "react";
import Formulario from "./Formulario";
import { CartContext } from "../../Context/CartContext";
import db from "../../db/db.js";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import validateForm from "../../utils/validacionFormulario.js"; 
import {toast } from "react-toastify";
import "./Checkout.css";

const Checkout = () => {
  const [datosForm, setDatosForm] = useState(
    {
        nombre: "",
        telefono: "",
        email: "",
    });


    const [idOrden, setIdOrden] = useState(null);
    const { carrito, precioTotal, vaciarCarrito} = useContext(CartContext);


    const handleChangeInput = (event) => {
        setDatosForm({...datosForm, [event.target.name]: event.target.value });
    };

    const handleSubmitForm = async(event) => {
        event.preventDefault();
        //formatear la orden
        const orden = {
            comprador: { ...datosForm},
            productos: [...carrito],
            fecha: Timestamp.fromDate(new Date()),
            total: precioTotal(), 
        }; 


        //validar formulario previo a subir la orden
        const response = await validateForm(datosForm)
        if(response.status === "success"){
            //subir la orden
            subirOrden(orden);
        }else{
            toast.warning(response.message);
        }
    };

    const subirOrden = async (orden) =>  {  
        try {
            const ordenesRef = collection(db, "ordenes");
            const ordenDb = await addDoc(ordenesRef, orden);
            setIdOrden(ordenDb.id);   
        }  catch (error) {
                console.error(error);
            }
       
    };

    return (
        <div className="checkout">
            {idOrden ? (
                <div>
                    <h3>¡Orden realizada con exito!</h3>
                    <p>Codigo de orden: {idOrden} </p>
                </div>               
            ) : (
                <Formulario
                datosForm={datosForm}
                handleChangeInput={handleChangeInput}
                handleSubmitForm={handleSubmitForm}
                />
            )}
        </div>
    );

};

export default Checkout;