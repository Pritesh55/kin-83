'use client';
import React from 'react'
import { AddToCartHeader } from './AddToCartHeader';
import Link from 'next/link';
import Image from 'next/image';


const AddToCartHeaderCall = () => {
    return (
        <>
            <AddToCartHeader>
                <Link href="/products/cart" className="bg-yellow-300 rounded-full p-5 border-red-500 border-2">
                    <Image src='/cart-icon.svg' alt='cart' width={32} height={32} className=' svg-convert-to-black '></Image>
                </Link>
            </AddToCartHeader>
        </>
    )
}

export default AddToCartHeaderCall