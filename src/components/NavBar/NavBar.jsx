import CartWidget from "./CartWidget"
import logo from "./logo.png"
import { Link } from "react-router-dom"
import "./NavBar.css"



const NavBar = () => {
    
    return(
        <nav className="navbar">
            <div className="brand">
             <Link to="/"><img src= {logo} alt="logo" /> </Link>
            </div>

            <ul className="nav__list">
                <Link to="/category/cienciaficcion"  className="nav__li">
                    <p>Ciencia Ficción</p>
                </Link>

                <Link to="/category/novelanoir"  className="nav__li">
                    <p>Novela Noir</p>
                </Link>

                <Link to="/category/fantasiaEpica"  className="nav__li">
                    <p>Fantasia Epica</p>
                </Link>
               
            </ul>
 


            <CartWidget/>
        
        </nav>
    )
}

export default NavBar