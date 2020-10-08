import React from 'react';
import {Link} from 'gatsby';
import './nav.css';


const Nav = () => {
    return (
        <nav>
            <Link
                to={'/about'}
                className="link"
                activeClassName="pagina-actual"
            >SOBRE MÍ</Link>
            <Link 
                to={'/paginas'}
                className="link"
                activeClassName="pagina-actual"
            >PÁGINAS</Link>
            <Link 
                to={'/freelance'}
                className="link"
                activeClassName="pagina-actual"
            >FREELANCE</Link>
        </nav>
    );
}
 
export default Nav;