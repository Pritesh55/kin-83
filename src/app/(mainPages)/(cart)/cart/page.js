

import SpCart from '@/app/components/cliants/SpCart/SpCart';
import ProductsDisplayAdmin from '@/app/componentsAdmin/ProductsDisplayAdmin';
import React from 'react'

export const metadata = {
    title: 'Cart page',
    description: 'Generated by create next app',
}

export const revalidate = 0.1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const Cart = async () => {

    return (
        <>
            <div className="px-5 2xl:container text-2xl">
                <div className="flex flex-col gap-y-5 -mt-5">
                    {/* <ProductsDisplayAdmin isCart={true}></ProductsDisplayAdmin> */}

                    <SpCart></SpCart>
                </div>
            </div>

        </>
    )
}

export default Cart