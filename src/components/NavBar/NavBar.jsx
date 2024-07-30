import CartWidget from "./CartWidget"
import logo from "./logo.png"
import { Link } from "react-router-dom"


import "./NavBar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <div className="brand">
             <Link to="/"><img src= {logo} alt="" /> </Link>
            </div>

            <ul className="nav__list">
                <Link to="/category/cienciaficcion"  className="nav__li">
                    <h2>Ciencia Ficción</h2>
                </Link>

                <Link to="/category/novelanoir"  className="nav__li">
                    <h2>Novela Noir</h2>
                </Link>
               
            </ul>
 


            <CartWidget/>
        </nav>
    )
}

export default NavBar