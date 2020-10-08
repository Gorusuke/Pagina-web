import React, { Fragment } from 'react';
import NavFooter from './navFooter';
import './header.css';


const Footer = ({title}) => {

    const year = new Date().getFullYear()

    return (
        <Fragment>
            <footer>
                <div className="contenedor">
                    <div className="container">
                        <h1>JOSE GARCIA &copy; {year}</h1>
                        <a
                            className="boton"
                            href={'https://www.dropbox.com/s/qs5r5agmxcejjol/CV%20-%20Jose%20Andres%20Garcia%20Montes.pdf?dl=0x'}
                            target="_blank"
                            rel="noreferrer"
                        >VER RESUMÉ</a> 
                    </div>        
                    <NavFooter />
                </div>
            </footer>
        </Fragment>
    );
}
 
export default Footer;