import React from 'react';
import { Link } from 'react-router-dom'
import Logo from '../images/Logo.jpg'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="Logo" className="brand-logo">Promobot-Shop</Link>

                    <ul className="right">
                        <li><Link to="/">Shop</Link></li>
                        <li><Link to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>


    )
}

export default Navbar;
