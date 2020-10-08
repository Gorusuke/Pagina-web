exports.createPages = async ({actions, graphql, reporter}) => {
    
    const resultado = await graphql(`
        query{
            allDatoCmsPagina{
                nodes{
                    slug      
                }
            }
        }
    `);

    // console.info(resultado.data.allDatoCmsPagina.nodes)

    if(resultado.errors){
        reporter.panic('No hubo resultados', resultado.errors)
    }

    // Si hay paginas, crear los archivos
    const paginas = resultado.data.allDatoCmsPagina.nodes;

    paginas.forEach(pagina => {
        actions.createPage({
            path: `/paginas/${pagina.slug}`,
            component: require.resolve('./src/components/Paginas/pagina.js'),
            context: {
                slug: pagina.slug
            }
        })
    });
}