import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import initialState from '../initialState';
import Products from '../components/Products';

import '../styles/components/Home.css'

const Home = () => {

    const { state } = useContext(AppContext);
    const { cart } = state

    return(
        <>
        {cart.length > 0 && 
            <div className="Home-pay-button">
                <Link to="/checkout">Pagar</Link>
            </div>
        }
        <Products products={initialState.products} />
        </>
    )
}

export default Home;