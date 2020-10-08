import React, { Fragment, useEffect } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';
import {Link} from 'gatsby';
import './previewPaginas.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const PreviewPaginas = () => {


    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        
    }, []);

    const data = useStaticQuery(graphql`
        query{
            allDatoCmsImagen {
                nodes {
                    titulo
                    contenido
                    id
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
    // console.info(data.allDatoCmsImagen.nodes)
    
    const candie = data.allDatoCmsImagen.nodes[0];
    const alice = data.allDatoCmsImagen.nodes[1];
    const viajes = data.allDatoCmsImagen.nodes[2];

    return (
        <Fragment>
            <h2 className="subtitulo">ÚLTIMOS PROYECTOS</h2>
            <div className="contenedor2">
                <div className="contenedor4">
                    <div className="contenedor5">
                    <div>
                        <Image
                            fluid={alice.imagen.fluid}
                        />
                    </div>
                    <div data-aos="slide-down" className="caja caja1">
                        <h3>{alice.titulo}</h3>
                        <p>{alice.contenido}</p>
                        <Link 
                            className="boton"
                            to={`/paginas/${alice.slug}`}
                        >VER PÁGINA</Link>
                    </div>
                        <div className="caja-boton">
                            <h3 className="titulo">{alice.titulo}</h3>
                            <Link 
                                className="button"
                                to={`/paginas/${alice.slug}`}
                            >VER PÁGINA</Link>
                        </div>
                    </div>
                   
                    <div className="contenedor5">
                        <div>
                            <Image
                                fluid={viajes.imagen.fluid}
                            />
                        </div>
                        <div data-aos="zoom-in" className="caja caja2">
                            <h3>{viajes.titulo}</h3>
                            <p>{viajes.contenido}</p>
                            <Link 
                                className="boton"
                                to={`/paginas/${viajes.slug}`}
                            >VER PÁGINA</Link>
                        </div>                        
                        <div className="caja-boton">
                            <h3 className="titulo">{viajes.titulo}</h3>
                            <Link 
                                className="button"
                                to={`/paginas/${viajes.slug}`}
                            >VER PÁGINA</Link>
                        </div>                        
                    </div>
                </div>
                <div className="contenedor6">
                    <div data-aos="fade-up" className="caja caja3">
                        <h3>{candie.titulo}</h3>
                        <p>{candie.contenido}</p>
                        <Link 
                            className="boton"
                            to={`/paginas/${candie.slug}`}
                        >VER PÁGINA</Link>
                    </div>
                    <div className="imagen3">
                        <Image
                            fluid={candie.imagen.fluid}
                        />
                    </div>
                    <div className="caja-boton">
                        <h3 className="titulo">{candie.titulo}</h3>
                        <Link 
                            className="button"
                            to={`/paginas/${candie.slug}`}
                        >VER PÁGINA</Link>
                    </div>                   
                </div>                     
            </div>
            <h2 data-aos="flip-down" className="subtitulo">HABLEMOS</h2>
            <div className="hablemos">
                <p>Contactame a traves de mi <a href="mailto:Gorusuke123@gmail.com" className="email"><b>EMAIL</b></a></p>
                <a
                    className="boton"
                    href={'https://www.dropbox.com/s/qs5r5agmxcejjol/CV%20-%20Jose%20Andres%20Garcia%20Montes.pdf?dl=0'}
                    target="_blank"
                    rel="noreferrer"
                >VER RESUMÉ</a>
            </div>
            
        </Fragment>
    );
}
 
export default PreviewPaginas;