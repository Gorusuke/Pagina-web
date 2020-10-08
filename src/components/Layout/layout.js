import React, {Fragment} from 'react';
import Header from './header';
import Footer from './footer';
import Helmet from 'react-helmet';
import './layout.css';


const Layout = (props) => {
    return (        
        <Fragment>
            <Helmet>
                <title>Jose Garcia | Frontend Developer</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css" integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w==" crossorigin="anonymous" />
                <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700;900&family=Staatliches&display=swap" rel="stylesheet"/>
                <script src="https://kit.fontawesome.com/23192939c8.js" crossorigin="anonymous"></script>
            </Helmet>
            <Header />
            {props.children}
            <Footer />
        </Fragment>
    );
}
 
export default Layout;