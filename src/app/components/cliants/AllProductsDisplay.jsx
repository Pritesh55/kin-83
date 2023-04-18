"use client"
import ProductsCardAdmin from '@/app/componentsAdmin/ProductsCardAdmin'
import React, { useEffect, useReducer, useState } from 'react'
import { useRouter } from 'next/router';
import Link from 'next/link';
import { PtModels2 } from '@/utils/models/allModel';




const AllProductsDisplay = async () => {
    const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

    const sortAllProductsList = await PtModels2.find().sort({ "id": 1 });

    const [sortAllProductsArray, setSortAllProductsArray] = useState([...sortAllProductsList]);

    return (
        <>

            <ul className="flex gap-x-5 flex-wrap gap-y-5 pb-10 items-center ">

                <h1 className="">
                    {process.env.NODE_ENV} { }
                </h1>

                <Link href='/api/product/sort' onClick={() => { redirectPage(); }} target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full'>
                    Sort
                </Link>

                <Link href='/api/product/read' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full'>
                    Read
                </Link>

                <Link href='/api/product/addall' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full' onClick={() => { redirectPage(); }} >
                    Add all
                </Link>

                <Link href='/api/product/deleteall' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full' onClick={() => {
                    setTimeout(" redirectPage()", 5000);
                    console.log(`redirectPage Runs`)

                }} >
                    delete all
                </Link>
            </ul>


            {sortAllProductsArray.map((curItem, index) => {
                return (
                    <>
                        <ProductsCardAdmin key={index}
                            id={sortAllProductsArray[index].id}
                            img={sortAllProductsArray[index].img}
                            title={sortAllProductsArray[index].title}
                            description={sortAllProductsArray[index].description}
                            price={sortAllProductsArray[index].price}
                        >
                        </ProductsCardAdmin>
                    </>
                )
            })}
        </>
    )
}

export default AllProductsDisplay