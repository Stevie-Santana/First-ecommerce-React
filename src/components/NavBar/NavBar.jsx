import CartWidget from "./CartWidget"
import "./NavBar.css"

const NavBar = () => {
    
    return(
        <nav className="navbar">
            <div className="brand">
            <h3 className="brand">BRAND</h3>
            <h4>books</h4>
            </div>

            <ul className="nav__list">
                <li className="nav__li">Libros</li>
                <li className="nav__li">Comics</li>
                <li className="nav__li">Merch</li>
            </ul>



            <CartWidget/>
        </nav>
    )
}

export default NavBar