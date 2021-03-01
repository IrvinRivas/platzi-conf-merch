import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import { PayPalButton }from 'react-paypal-button';
import { useHistory } from 'react-router-dom';

import pass from '../../pass';
import AppContext from '../context/AppContext';
import '../styles/components/Payment.css';

const Payment = () => {
    const { state, addNewOrder } = useContext(AppContext);
    const { cart, buyer } = state;
    const history = useHistory();

    const clientId = pass.paypayPaymentClientId;

    const paypalOptions = {
        clientId: clientId ,
        intent: 'capture',
        currency: 'USD'
        }

    const buttonStyle = {
        layout: 'vertical',
        shape: 'rect'
    }

    const CheckProductsInCart = () => {
        if(cart.length === 0) {
            history.push('/')
        }
    }
    CheckProductsInCart()

    const handlePaymentSuccess = data => {
        if(data.status === 'COMPLETED'){
            const newOrder = {
                buyer,
                products: cart,
                payment: data
            }
            addNewOrder(newOrder)
            history.push('/checkout/success')
        }

        
    }

    const handleSumTotal = () => {
        const reducer = (accumulador,currentValue) => accumulador + currentValue.price;
        const sum = cart.reduce(reducer, 0);
        return sum;
     }

    return(
        <>
        <Helmet>
            <title>Pagar mi pedido -Platzi Conf Merch</title>
        </Helmet>
        <div className="Payment">
            <div className="Payment-content">
                <h3>Resumen del pedido</h3>
                {cart.map((item => (
                    <div className="Payment-item" key={item.title}>
                        <div className="Payment-element">
                            <h4>{item.title}</h4>
                            <span>$ {item.price}</span>
                        </div>
                    </div>
                )))}
                <div className="Payment-button">
                    <PayPalButton
                        paypalOptions={paypalOptions}
                        buttonStyles={buttonStyle}
                        amount={handleSumTotal()}
                        onPaymentStart={ () => console.log('start')}
                        onPaymentSuccess={data => handlePaymentSuccess(data)}
                        onPaymentError={err => console.log(err)}
                        onPaymentCancel={data => console.log(data)}
                    />
                </div>
            </div>
        </div>
        </>
    )
}

export default Payment;