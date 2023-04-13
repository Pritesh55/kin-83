
import React, { useContext, useEffect, useState } from 'react'
import { CartProductsContext } from '../contexts/createContext';
import Image from 'next/image';
import Link from 'next/link';


export const AddToCartHeader = ({ children }) => {

    const { totalItem, totalAmount } = useContext(CartProductsContext);

    return (

        <div className="flex justify-between items-center px-10 gap-x-10 lg:gap-x-20 h-8 lg:h-16">

            <div className="flex gap-x-5 lg:gap-x-20 items-center justify-between flex-wrap gap-y-5 px-5 lg:px-20 py-2 bg-yellow-300 rounded-t-2xl lg:rounded-t-full w-full">

                <div className="font-semibold text-xl">
                    <span className="hidden lg:inline"> Shopping </span>
                    <span className=""> Cart </span>
                </div>
                <div className="font-semibold text-xl">{totalItem} Items</div>
                <div className="font-semibold text-xl">{totalAmount} Rs</div>

            </div>

            {children}



        </div>
    )
}
