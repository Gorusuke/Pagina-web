import React from 'react';
import './nav.css';


const NavFooter = () => {
    return (
        <nav className="nav">
            <a
                href="mailto:Gorusuke123@gmail.com"
                className="link"
            >EMAIL</a>
            <a
                href="https://github.com/Gorusuke" rel="noreferrer" target="_blank"
                className="link"
            >GITHUB</a>
            <a
                href="https://www.linkedin.com/in/jose-andres-garcia-montes-2985921b4/" rel="noreferrer" target="_blank"
                className="link"
            >LINKEDIN</a>
        </nav>
    );
}
 
export default NavFooter;