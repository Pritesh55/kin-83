
import ProductsCardAdmin from '@/app/componentsAdmin/ProductsCardAdmin';
import { getAllProductsData } from '@/utils/functions/getAllProducts';
import React from 'react'

export const metadata = {
    title: 'Admin page',
    description: 'Generated by create next app',
}

const Admin = async () => {

    const productsJSONObjectFS = await getAllProductsData();
    const productsArrayFS = productsJSONObjectFS.products;

    return (
        <>
            <div className="px-5 2xl:container text-2xl">
                <div className="flex flex-col gap-y-10">
                    <div className="">
                        This is Admin page...
                    </div>

                    <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
                        {productsArrayFS.map((curItem, index) => {
                            return (
                                <ProductsCardAdmin key={curItem.id}
                                    {...curItem}>
                                </ProductsCardAdmin>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>
    )
}

export default Admin