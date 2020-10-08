import React from "react";
import Layout from "../components//Layout/layout";
import ImagenPrincipal from "../components/Index/imagenPrincipal";
import ContenidoInicio from "../components/Index/contenidoInicio";
import PreviewPaginas from "../components/Index/previewPaginas";



const IndexPage = () => (
  <Layout>

    <ImagenPrincipal />
    <ContenidoInicio />
    <PreviewPaginas />
    
  </Layout>
)

export default IndexPage
