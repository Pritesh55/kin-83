
{/* Context API 07 :: import useContext  */ }
import React, { useContext } from 'react'

{/* Context API 08 :: import Our createContext function */ }

import { CartProductsContext } from '../contexts/createContext';
import ProductsCard from './ProductsCard';

// const ShowProducts = ({ kyoData }) => {
const ShowProducts = () => {
    {/* Context API 06 :: useContext  */ }
    // Write ContextName which is used in createContext..
    // Destructure keys data from object received from useContext...
    const { item } = useContext(CartProductsContext);

    return (
        <>
            <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
                {item.map((curItem, index) => {
                    return (
                        <ProductsCard key={curItem.id}
                            {...curItem} >
                        </ProductsCard>
                    )
                })}
         </div >

        </>
    )
}

export default ShowProducts