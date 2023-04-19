import React from 'react'
import { AddToCartHeader } from '../AddToCartHeader'
import CartProductsBox from './CartProductsBox'


const ShowCart = () => {
    return (
        <>
            <AddToCartHeader>
            </AddToCartHeader>

            <div className="pt-5">
                <CartProductsBox></CartProductsBox>
            </div>

        </>



    )
}

export default ShowCart