import { Link } from "react-router-dom";

const Item = ({producto}) => {
    return (
        <div className="item" > 
        <img width={200} src= {producto.img} alt="" />
        <div className="info-item">
        <h3>{producto.name} </h3>
        <h4>{producto.autor} </h4>
         <Link className="button-detail" to={"/detalle/" + producto.id }>Ver detalles</Link>
        </div>
        </div> 
    );
};

export default Item;