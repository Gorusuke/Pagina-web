import React from 'react';
import {Link} from 'gatsby';
import './header.css';
import Nav from './nav';


const Header = () => {
    return (
        <header>
            <div className="contenedor">
                <Link to={'/'} className="link">
                    <h1>JOSE GARCIA | FRONTEND DEVELOPER</h1>
                </Link>
                <Nav />
            </div>
        </header>
    );
}
 
export default Header;