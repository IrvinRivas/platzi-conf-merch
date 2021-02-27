import { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const resetCart = payload => {
        setState({
            ...state,
            cart: []
        })
    }

    const addToCart = payload => {
        setState({
            ...state,
            cart:[...state.cart, payload],
        })
    }

    const removeFromCart = (payload,indexToRemove) => {
        setState({
            ...state,
            cart: state.cart.filter((items, index)=> index !== indexToRemove )
        })
    }

    const addToBuyer = payload => {
        setState({
            ...state,
            buyer: [...state.buyer, payload]
        })
    }

    const addNewOrder = payload => {
        setState({
            ...state,
            orders: [...state.orders, payload],
        })
    }

    return {
        addToCart,
        removeFromCart,
        resetCart,
        addToBuyer,
        addNewOrder,
        state
    };
}

export default useInitialState
