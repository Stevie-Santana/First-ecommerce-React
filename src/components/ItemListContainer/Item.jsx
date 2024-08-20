import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="item" > 
        <img width={200} src= {producto.img} alt="" />
        <div className="info-item">
        <h5>{producto.name} </h5>
        <p>{producto.autor} </p>
         <Link className="button-detail" to={"/detalle/" + producto.id }>Ver detalles</Link>
        </div>
        </div> 
    );
};

export default Item;