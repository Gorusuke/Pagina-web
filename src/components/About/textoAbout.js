import React, { Fragment } from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import {Link} from 'gatsby';
import './textoAbout.css'


const TextoAbout = () => {


    const data = useStaticQuery(graphql`
        query{
            allDatoCmsSobreMi(filter:{slug: {eq:"Text2"}}){
                nodes{
                    subtitulo
                    contenidoSubtitulo
                    contenidoSubtitulo2
                    contenidoSubtitulo3
                    contenidoSubtitulo4
                    slug
                }
            }
        }
    `);

    const {subtitulo, contenidoSubtitulo, contenidoSubtitulo2, contenidoSubtitulo3, contenidoSubtitulo4} = data.allDatoCmsSobreMi.nodes[0];
    

    return (
        <Fragment>
            <div className="contenedor8">
                <h2 className="subtitulo">{subtitulo}</h2>
                <p>{contenidoSubtitulo}</p>
                <p>{contenidoSubtitulo2}</p>
                <p>{contenidoSubtitulo3}</p>
                <p>{contenidoSubtitulo4}</p>
                <p>Consulta mis {' '}
                    <Link 
                        to={'/paginas'}
                        className="link1"
                        activeClassName="pagina-actual"
                    >PÁGINAS</Link>
                </p>
            </div>
        </Fragment>
    );
}
 
export default TextoAbout;