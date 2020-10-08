import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import Img from "gatsby-image";


const BackgroundAbout = () => {

    const data = useStaticQuery(graphql`
        query{
            file(relativePath:{eq: "Background-about.jpg"}){
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            image1: file(relativePath:{eq: "foto.jpg"}){
                id
                childImageSharp{
                    fluid{
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    // console.info(data.file.childImageSharp.fluid)


    return (
        <BackgroundImage tag="section" fluid={data.file.childImageSharp.fluid} fadeIn="soft" className="background-image">
            <div className="opacity">
                <div className="imagen">
                    <div className="image">
                        <Img fluid={data.image1.childImageSharp.fluid} alt="foto-about" />
                    </div>
                    <h2>JOSE GARCIA</h2>
                    <p>Soy un desarrollador Frontend que trabaja con agencias y personas de todo el mundo.
                    </p>
                </div>
            </div>
        </BackgroundImage>
    );
}
 
export default BackgroundAbout;