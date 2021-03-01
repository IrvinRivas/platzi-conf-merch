import React from 'react';
import { Helmet } from 'react-helmet';
import initialState from '../initialState';
import Products from '../components/Products';

import '../styles/components/Home.css'

const Home = () => {
    return(
        <>
        <Helmet>
            <title>Platzi Conf Merch -products</title>
            <meta name="twitter:card" content="summary_large_image"/>
            <meta name="twitter:title" content="Platzi Conf Store"/>
            <meta name="twitter:description" content="Platzi Conf Store"/>
            <meta property="og:title" content="Platzi Conf Store"/>
            <meta property="og:description" content="Platzi Conf Store"/>
            <meta property="og:url" content="platzi-store-merch-27dda.firebaseapp.com" />
            <meta property="og:site_name" content="Platzi Conf Store" />
            <meta property="og:locale" content="es_ES" />
            <meta property="og:type" content="article" />
            <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
        </Helmet>
        <Products products={initialState.products} />
        </>
    )
}

export default Home;