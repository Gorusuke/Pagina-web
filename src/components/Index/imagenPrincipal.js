import React, {Fragment} from 'react';
import {Link} from 'gatsby';
import {graphql, useStaticQuery} from 'gatsby';
// import BackgroundImage from 'gatsby-background-image';
import Img from "gatsby-image"
import './imagenPrincipal.css'


const ImagenPrincipal = () => {

    const data = useStaticQuery(graphql`
        query{
            image: file(relativePath:{eq: "Hero.jpg"}){
                id
                childImageSharp{
                    fluid(maxWidth: 1000, maxHeight: 600){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image1: file(relativePath:{eq: "logo.png"}){
                id
                childImageSharp{
                    fluid(maxWidth: 800){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }    
    `);

    return (
        <Fragment>
            <div className="Banner">
                <div className="background">
                    <Img fluid={data.image.childImageSharp.fluid} alt="Background" />
                </div>
                
                <div className="contenedor1">
                    <h1>JOSE GARCIA</h1>
                    <h2>¿Quieres saber si te puedo ayudar?</h2>
                    <Link 
                        className="boton1"
                        to={'/about'}
                    >LEE SOBRE MÍ</Link> 
                </div>
            </div>
        </Fragment>
    );
}
 
export default ImagenPrincipal;