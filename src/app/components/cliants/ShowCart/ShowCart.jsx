import React from 'react'
import { AddToCartHeader } from '../AddToCartHeader'
import CartProductsBox from './CartProductsBox'
import Link from 'next/link'
import Image from 'next/image'

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