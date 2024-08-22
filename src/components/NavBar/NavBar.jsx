import CartWidget from "./CartWidget"
import logoR from "./logoR.png"
import { Link } from "react-router-dom"
import "./NavBar.css"



const NavBar = () => {
    
    return(
        <nav className="navbar">
            <div className="brand">
             <Link to="/"><img src= {logoR} alt="logo" /> </Link>
            </div>

            <ul className="nav__list">
                <Link to="/category/cienciaficcion"  className="nav__li">
                    <h5>CIENCIA FICCION</h5>
                </Link>

                <Link to="/category/novelanoir"  className="nav__li">
                    <h5>NOVELA NOIR</h5>
                </Link>

                <Link to="/category/fantasiaEpica"  className="nav__li">
                    <h5>FANTASIA EPICA</h5>
                </Link>
               
            </ul>
 


            <CartWidget/>
        
        </nav>
    )
}

export default NavBar