import React, {Fragment, useEffect} from 'react';
import './contenidoInicio.css';
import Aos from 'aos';
import 'aos/dist/aos.css';



const ContenidoInicio = () => {


    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        
    }, []);

    return (
        <Fragment>
            <h2 className="subtitulo">LO QUE HAGO</h2>
            <div className="contenedor2">
                <div className="contenedor3">
                    <div data-aos="slide-up" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fas fa-search"></i></li>
                            <h2>INVESTIGACIÓN </h2>
                        </div>
                        <p>La investigación es uno de los procesos más complejos y a la vez más importantes para el éxito y la elaboración de un proyecto.</p>
                    </div>
                    <div data-aos="flip-up" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fas fa-pencil-alt"></i></li>
                            <h2>DISEÑO WEB</h2>
                        </div>
                        <p>Crear y mantener un diseño visual para que el producto comunique las soluciones, deseos y necesidades que tiene nuestro cliente.</p>
                    </div>
                    <div data-aos="zoom-in" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fas fa-code"></i></li>
                            <h2>PROGRAMAR</h2>
                        </div>
                        <p>Elaborar y probar las mejores soluciones posibles que tiene como objetivo resolver las necesidades de nuestros clientes.</p>
                    </div>
                </div>                
            </div>
        </Fragment>
    );
}
 
export default ContenidoInicio;