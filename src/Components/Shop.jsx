import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductCard from './Cards/ProductCard';
import { addToDb } from '../Utilities/fakeDB';

const Shop = () => {
    const productData = useLoaderData();
    // console.log(productData);

    //Card button handler 
    const handleAddToCard = (id)=>{
        // console.log(id);
        addToDb(id)
    }
    return (
        <div className='product-container'>
            {
                productData.map(product=> <ProductCard
                 key = {product.id}
                 product = {product}
                 handleAddToCard = {handleAddToCard}
                ></ProductCard>)
            }
        </div>
    );
};

export default Shop;