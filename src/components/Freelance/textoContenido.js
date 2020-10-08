import React, { Fragment, useEffect} from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import './textoContenido.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const TextoContenido = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        
    }, []);

    const data = useStaticQuery(graphql`
    query{
        allDatoCmsSobreMi(filter:{slug: {eq:"Text1"}}){
          nodes{
            tituloPrincipal
            subtitulo
            subtitulo2
            subtitulo3
            contenido
            contenidoSubtitulo
            contenidoSubtitulo2
            contenidoSubtitulo3
            contenidoSubtitulo4
            contenidoSubtitulo5
            contenidoSubtitulo6
            slug
          }
        }
      }
    `);

    const {tituloPrincipal, subtitulo, subtitulo2, subtitulo3, contenido, contenidoSubtitulo, contenidoSubtitulo2} = data.allDatoCmsSobreMi.nodes[0];


    return (
        <Fragment>
            <div className="contenedor7">
                <h2 className="subtitulo">{tituloPrincipal}</h2>
                <p className="subtitulo1">{subtitulo}</p>
                <p>{contenido} <b><a href="mailto:Gorusuke123@gmail.com">EMAIL</a></b></p>
                <p className="subtitulo1">{subtitulo2}</p>
                <p><b>– Comunicación: </b>{contenidoSubtitulo}</p>
                <p><b>Observar los objetivos comerciales subyacentes a la mano: </b>{contenidoSubtitulo2}</p>
                <p className="subtitulo1">{subtitulo3}</p>
                <ul>
                    <li>Html</li>
                    <li>Css</li>
                    <li>JavaScript</li>
                    <li>Scss</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                    <li>Gatsby.js</li>
                    <li>Next.js</li>
                    <li>Git</li>
                    <li>GitHub</li>
                </ul>
            </div>
            <h2 className="subtitulo">Tecnologías que estoy aprendiendo</h2>
            <div className="contenedor2">
                <div className="contenedor3">
                    <div data-aos="fade-down" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fab fa-node-js"></i></li>
                            <h2>NODE JS</h2>
                        </div>
                        <p>Estoy aprendiendo NodeJS para ser FullStack JavaScript y poder implementarlo en mis futuros proyectos.</p>
                    </div>
                    <div data-aos="flip-down" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fab fa-react"></i></li>
                            <h2>REACT NATIVE</h2>
                        </div>
                        <p>Me gustaría aprender a desarrollar aplicaciones hibridas para iOS y Android utilizando JavaScript.</p>
                    </div>
                    <div data-aos="fade-up" className="diseno">
                        <div className="diseno-container">
                            <li><i className="fab fa-python"></i></li>
                            <h2>PYTHON</h2>
                        </div>
                        <p>Quiero implementar mi propio Backend para Tener una visión más completa sobre el desarrollo de un sistema.</p>
                    </div>
                </div>                
            </div>
        </Fragment>
    );
}
 
export default TextoContenido;