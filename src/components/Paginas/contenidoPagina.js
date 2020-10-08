import React, { Fragment, useEffect } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Link} from 'gatsby';
import Image from 'gatsby-image';
import './contenidoPagina.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const ContenidoPagina = () => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        
    }, []);

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsPagina{
            nodes{
                titulo
                subtitulo
                contenido
                contenidoSubtitulo
                slug
                imagen{
                    fluid{
                        ...GatsbyDatoCmsFluid
                    }
                }
            }
            }
        }
    `);

    // console.info(data.allDatoCmsPagina.nodes)

    const viajes = data.allDatoCmsPagina.nodes[2];
    const alice = data.allDatoCmsPagina.nodes[1];
    const candie = data.allDatoCmsPagina.nodes[0];

    return (
        <Fragment>
            <h2 className="subtitulo">CASOS DE PÁGINA</h2>
            <div className="contenedor2">
                <div className="contenedor-all">
                    <div className="contenedor-imagenes">
                        <div>
                            <Image
                                fluid={candie.imagen.fluid}
                            />
                        </div>
                        <div data-aos="zoom-in" className="contenedor-titulo cajita">
                            <h3>{candie.titulo}</h3>
                            <p>{candie.contenido}</p>
                            <Link 
                                className="boton"
                                to={candie.slug}
                            >VER PÁGINA</Link>
                        </div>
                        <div data-aos="zoom-out" className="contenedor-subtitulo cajita1">
                            <h3>{candie.subtitulo}</h3>
                            <p>{candie.contenidoSubtitulo}</p>
                        </div>                    
                    </div>
                    <div className="contenedor-imagenes">
                        <div>
                            <Image
                                fluid={alice.imagen.fluid}
                            />
                        </div>
                        <div data-aos="fade" className="contenedor-titulo1 cajita">
                            <h3>{alice.titulo}</h3>
                            <p>{alice.contenido}</p>
                            <Link 
                                className="boton"
                                to={alice.slug}
                            >VER PÁGINA</Link>
                        </div>
                        <div data-aos="zoom-in-right" className="contenedor-subtitulo1 cajita1">
                            <h3>{alice.subtitulo}</h3>
                            <p>{alice.contenidoSubtitulo}</p>
                        </div>                    
                    </div>
                    <div className="contenedor-imagenes">
                        <div>
                            <Image
                                fluid={viajes.imagen.fluid}
                            />
                        </div>
                        <div data-aos="flip-left" className="contenedor-titulo cajita">
                            <h3>{viajes.titulo}</h3>
                            <p>{viajes.contenido}</p>
                            <Link 
                                className="boton"
                                to={viajes.slug}
                            >VER PÁGINA</Link>
                        </div>
                        <div data-aos="fade-down" className="contenedor-subtitulo cajita1">
                            <h3>{viajes.subtitulo}</h3>
                            <p>{viajes.contenidoSubtitulo}</p>
                        </div>                    
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
 
export default ContenidoPagina;