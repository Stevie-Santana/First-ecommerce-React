import bag from "./bag.png"
const CartWidget = () => {

    return (
        <div className="cartwidget">
            <a href=""><img  className="cart" src= {bag}  alt="" /></a>
            <p>1</p>
        </div>
    )
}

export default CartWidget
