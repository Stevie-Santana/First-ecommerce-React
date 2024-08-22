import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import "./Footer.css"


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
            <div className="footer__brand">
          <h5>DREAMFYRE'S BOOKSHOP</h5>
        </div>

         <div className="footer__socials">
          <ul className="social__links">
            <li>
              <a href="" target="_blank"> <FaFacebook size={24} color="black" /></a>
            </li>
            <li>
              <a href="" target="_blank">< FaInstagram size={24} color="black" /></a>
            </li>
            <li>
              <a href="" target="_blank"><FaTwitter size={24} color="black" /></a>
            </li>
          </ul>
        </div>
        <div><p>Dev. Stevie Santana</p></div>
        </div>
        </footer>

    )
}

export default Footer;