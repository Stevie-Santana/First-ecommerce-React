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
                    <p>CIENCIA FICCION</p>
                </Link>

                <Link to="/category/novelanoir"  className="nav__li">
                    <p>NOVELA NOIR</p>
                </Link>

                <Link to="/category/fantasiaEpica"  className="nav__li">
                    <p>FANTASIA EPICA</p>
                </Link>
               
            </ul>
 


            <CartWidget/>
        
        </nav>
    )
}

export default NavBar