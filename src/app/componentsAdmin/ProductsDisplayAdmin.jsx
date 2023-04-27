"use client"

import React, { useState } from 'react'
import ApiNavbar from '../components/cliants/ApiNavbar';
import SortProductsDisplay from './data/SortProductsDisplay';
import ReadProductsDisplay from './data/ReadProductsDisplay';

const ProductsDisplayAdmin = ({ isAdmin = false }) => {

    const [isSort, setIsSort] = useState(false);

    return (
        <>
            <ul className="flex flex-col items-center lg:flex-row justify-between gap-x-5 flex-wrap gap-y-5">

                {
                    (isAdmin) &&
                    <>
                        <ApiNavbar></ApiNavbar>
                    </>
                }


                <div className="flex flex-wrap gap-x-5">
                    <a onClick={() => { setIsSort(false); }} className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max cursor-pointer'>
                        Read
                    </a>

                    <a onClick={() => { setIsSort(true); }} className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max cursor-pointer'>
                        Sort
                    </a>
                </div>

            </ul >

            <hr />




            <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
                {
                    (isSort == true) &&
                    <SortProductsDisplay></SortProductsDisplay>
                }
                {
                    (isSort == false) &&
                    <ReadProductsDisplay></ReadProductsDisplay>
                }

            </div >
        </>
    )
}

export default ProductsDisplayAdmin