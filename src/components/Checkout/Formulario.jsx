const Formulario = ({ datosForm, handleChangeInput, handleSubmitForm }) => {
    return (
        <form onSubmit={handleSubmitForm} className="checkout-form">
            <p>Completa el formulario para terminar tu compra</p>
           
            <label>Nombre</label>
            <input type="text" name="nombre" value={datosForm.nombre} onChange={handleChangeInput} />

            <label>Telefono</label>
            <input type="text" name="telefono" value={datosForm.telefono} onChange={handleChangeInput}/>

            <label>E-mail</label>
            <input type="text" name="email" value={datosForm.email} onChange={handleChangeInput} />
            
            <button className="send-order" type="submit">Enviar orden</button>
            </form>
    )
}

export default Formulario;