import React, {useEffect} from 'react';
import Layout from '../Layout/layout';
import {graphql} from 'gatsby';
import Image from 'gatsby-image';
import './pagina.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


export const query = graphql`
    query($slug: String!){
        allDatoCmsInformacionPagina(filter: {slug: {eq: $slug}}){
        nodes{
            titulo
            subtitulo1
            subtitulo2
            subtitulo3
            subtitulo4
            contenidoSubtitulo1
            contenidoSubtitulo2
            contenidoSubtitulo3
            contenidoSubtitulo4
            slug
            imagen{
                fluid{
                    ...GatsbyDatoCmsFluid
                }
            }
        }
        }
    }
`


const Pagina = ({data}) => {

    useEffect(() => {
        Aos.init({
            duration: 2000
        });
        
    }, []);


    // console.info(data.allDatoCmsInformacionPagina.nodes[0])

    const {titulo, subtitulo1, subtitulo2, subtitulo3, subtitulo4, contenidoSubtitulo1, contenidoSubtitulo2, contenidoSubtitulo3, contenidoSubtitulo4, imagen} = data.allDatoCmsInformacionPagina.nodes[0];

    

    return (
        <Layout>
            <div className="contenedor2">
                <div>
                    <Image
                        fluid={imagen.fluid}
                    />
                </div>
                <div className="contenedor2">
                    <div data-aos="zoom-in-up" className="container2">
                        <h3>{titulo}</h3>
                    </div>
                </div>
                <div data-aos="zoom-in-up" className="contenedor2">
                    <div className="container3">
                        <div data-aos="zoom-in-up" className="texto texto1">
                            <h4>{subtitulo1}</h4>
                            <p>{contenidoSubtitulo1}</p>
                        </div>
                        <div className="texto2">
                            <div data-aos="zoom-in-up" className="texto texto3 ">
                                <h4>{subtitulo2}</h4>
                                <p>{contenidoSubtitulo2}</p>
                            </div>
                            <div data-aos="zoom-in-up" className="texto texto4 ">
                                <h4>{subtitulo3}</h4>
                                <p>{contenidoSubtitulo3}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="ojala" className="border contenedor2">
                    <div data-aos="zoom-in-up" className="texto6 texto5">
                        <h4>{subtitulo4}</h4>
                        <p>{contenidoSubtitulo4}</p>
                    </div>
                </div>
                
            </div>
        </Layout>
    );
}
 
export default Pagina;