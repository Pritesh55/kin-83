'use client';
import React from 'react'
import { AddToCartHeader } from './AddToCartHeader';
import Link from 'next/link';
import Image from 'next/image';


const AddToCartHeaderCall = () => {
    return (
        <>
            <AddToCartHeader>
                <Link href="/products/cart" className="bg-yellow-300 rounded-2xl lg:rounded-full p-5 border-red-500 border-2 flex justify-center items-center max-h-full">
                    <Image src='/cart-icon.svg' alt='cart' width={32} height={32} className=' svg-convert-to-black '></Image>
                </Link>
            </AddToCartHeader>
        </>
    )
}

export default AddToCartHeaderCall