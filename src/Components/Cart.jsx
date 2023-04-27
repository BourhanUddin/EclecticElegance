import React from 'react';
import { getStoredCart } from '../Utilities/fakeDB';

const Cart = () => {

    const cartData = getStoredCart()
    console.log(cartData);

    return (
        <div>
            <h1>this is cart component</h1>
        </div>
    );
};

export default Cart;