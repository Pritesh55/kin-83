
{/* Context API 07 :: import useContext  */ }
import React, { useContext } from 'react'

{/* Context API 08 :: import Our createContext function */ }

import ProductsCard from './ProductsCard';
import { CartProductsContext } from '../contexts/createContext';

// const ShowProducts = ({ kyoData }) => {
const ShowProducts = () => {
    {/* Context API 06 :: useContext  */ }
    // Write ContextName which is used in createContext..
    // Destructure keys data from object received from useContext...

    // item = productsArrayFS;
    const { item } = useContext(CartProductsContext);


    // console.log(`---------------- productsArrayFS -----------------------`);
    // console.log(productsArrayFS);
    // console.log(`---------------- productsArrayFS -----------------------`);

    // item.isAddedToCart= productsArrayFS;

    // console.log(` ------------------------ item 12------------------------`);
    // console.log(item);
    // console.log(' ------------------------ item 13 ------------------------');

    // console.log(` ------------------------ item 12------------------------`);
    // console.log(productsArrayFS);
    // console.log(' ------------------------ item 13 ------------------------');

    return (
        <>
            <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
                {item.map((curItem, index) => {
                    return (
                        <ProductsCard key={curItem.id}
                            {...curItem}>
                        </ProductsCard>
                    )
                })}
            </div>

        </>
    )
}

export default ShowProducts