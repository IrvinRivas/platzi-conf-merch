import React, { useContext } from 'react';
import { Helmet } from 'react-helmet';
import AppContext from '../context/AppContext';
import Map from '../components/Map';
import useGoogleAddress from '../hooks/useGoogleAddress'
import '../styles/components/Success.css'

const Success = () => {

    const {state} = useContext(AppContext);
    const {buyer} = state;
    const location = useGoogleAddress(buyer[0].address);

    return(
        <>
        <Helmet>
            <title>Compra Exitosa -Platzi Conf Merch</title>
        </Helmet>
        <div className="Succes">
            <div className="Succes-content">
                <h2>{buyer[0].name } Gracias por tu compra!</h2>
                <span>Tu pedido llegara en 3 dias a tu direccion</span>
                <div className="Succes-map">
                    <Map data={location}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Success;