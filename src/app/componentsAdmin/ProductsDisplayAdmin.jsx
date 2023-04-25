"use client"

import React from 'react'
import ProductsCardAdmin from './ProductsCardAdmin'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductsDisplayAdmin = () => {

    const { data, error } = useSWR("/api/product/read", fetcher);

    if (error) {
        return (<> Error </>);
    }

    if (!data) {
        return (<> data not found </>);
    }

    console.log(data.products);


    return (
        <>
            <h3 className=""> data recieved </h3>
            <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
     
                {data.products.map((curItem, index) => {
                    return (
                        <>
                            <ProductsCardAdmin key={curItem.id}
                                {...curItem}>
                            </ProductsCardAdmin>
                        </>
                    )
                })}
            </div>
        </>
    )
}

export default ProductsDisplayAdmin