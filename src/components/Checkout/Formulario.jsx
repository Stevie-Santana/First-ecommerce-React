const Formulario = ({ datosForm, guardarDatosInput, enviarOrden }) => {
    return (
        <div>
            <h2>Completa el formulario para terminar tu compra</h2>
            <label>Nombre</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={guardarDatosInput} />

            <label>Telefono</label>
            <input type="text" name="telefono" value={datosForm.telefono}/>

            <label>E-mail</label>
            <input type="text" name="email" value={datosForm.email} onChange={guardarDatosInput} />
            
            <button className="send-order" type="submit">Enviar orden</button>
        </div>
    )
}

export default Formulario;