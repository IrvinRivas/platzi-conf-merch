import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import AppContext from '../context/AppContext';
import '../styles/components/Checkout.css';

const Checkout = () => {

    const {state, removeFromCart} = useContext(AppContext);
    const { cart } = state;

    const handleRemoveFromCart = (product, i) => () => {
        removeFromCart(product, i);
    }

    const handleSumTotal = () => {
        const reducer = (accumulador,currentValue) => accumulador + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
     }

    return(
        <>
        <Helmet>
            <title>Cesta de compra -Platzi Conf Merch</title>
        </Helmet>
        <div className="Checkout">
            <div className="Checkout-content">
                <h3>{cart.length > 0 ? 'lista de Pedidos' : 'no hay productos en tu canasta de compra'}</h3>
                {cart.map((item, i) => (
                    <div className="Checkout-item">
                        <div className="Checkout-element">
                            <h4>{item.title}</h4>
                            <span> $ {item.price}</span>
                        </div>
                        <button type="button" onClick={handleRemoveFromCart(item, i)}><i class="icon-delete fas fa-trash-alt"></i></button>
                    </div>
                ))}
            </div>
            {cart.length > 0 && 
                <div className="Checkout-sidebar">
                    <h3>{`Precio total $ ${handleSumTotal()}`}</h3>
                    <Link to="/checkout/info"><button type="button">Continuar pedido</button></Link>
                </div>  
            }
            
        </div>
        </>
    )
}

export default Checkout;