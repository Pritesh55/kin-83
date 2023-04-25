"use client"

import React from 'react'
import ProductsCardAdmin from './ProductsCardAdmin'
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json());



const ProductsDisplayAdmin = () => {
    // console.log(` ok--------------------------- data.products  --------------------------- `);
    // // console.log(data.products);
    // console.log(`ok --------------------------- data.products  --------------------------- `);



    const { data, error, isLoading } = useSWR("/api/product/read", fetcher, { refreshInterval: 1000 });

    if (error) {
        return (<> Error </>);
    }

    if (isLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!data) {
        return (<> data not found </>);
    }

    // console.log(` ok--------------------------- data.products  --------------------------- `);
    // let allProducts = data.readptModels2;
    // console.log(`ok --------------------------- data.products  --------------------------- `);


    return (
        <>
            <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>

                {data.readptModels2.map((curItem, index) => {
                    return (
                        <>
                            <ProductsCardAdmin key={index}
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