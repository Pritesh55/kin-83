

import AddToCartHeaderCall from '@/app/components/cliants/AddToCartHeaderCall'
import ShowProductsCall from '@/app/components/cliants/ShowProductsCall'


import React from 'react'

export const metadata = {
    title: 'Products page',
    description: 'Generated by create next app',
}

const Products = async () => {


    // const productsJSONObjectFS = await getAllProductsData();
    // const productsArrayFS = productsJSONObjectFS.products;

    return (
        <>
            <div className="flex flex-col gap-x-5 gap-y-10 justify-evenly flex-wrap">
                <div className="flex flex-col gap-y-10">
                    <AddToCartHeaderCall ></AddToCartHeaderCall>
                </div>

                <div className="flex flex-col gap-y-10">
                    {/* <ShowProductsCall productsArrayFS= {productsArrayFS}></ShowProductsCall> */}
                    {/* <ShowProductsCall ></ShowProductsCall> */}
                </div>
            </div>


        </>
    )
}

export default Products