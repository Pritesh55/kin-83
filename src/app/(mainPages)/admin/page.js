
import AllProductsDisplay from '@/app/components/cliants/AllProductsDisplay';
import ProductsCardAdmin from '@/app/componentsAdmin/ProductsCardAdmin';
import { PtModels2 } from '@/utils/models/allModel';

import React from 'react'

export const metadata = {
    title: 'Admin page',
    description: 'Generated by create next app',
}

const Admin = async () => {
    await dbConnect();

    const sortAllProductsList = await PtModels2.find().sort({ "id": 1 });
    const sortAllProductsArray = [...sortAllProductsList];

    // const productsJSONObjectFS = await getAllProductsData();
    // const productsArrayFS = productsJSONObjectFS.products;
    // console.log(productsArrayFS);


    return (
        <>
            <div className="px-5 2xl:container text-2xl">
                <div className="flex flex-col gap-y-10">
                    <div className="">
                        This is Admin page...
                    </div>

                    <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>

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
                    </div>

                    {/* <div className='flex flex-wrap gap-x-10 gap-y-10 justify-evenly pb-10'>
                        {productsArrayFS.map((curItem, index) => {
                            return (
                                <ProductsCardAdmin key={curItem.id}
                                    {...curItem}>
                                </ProductsCardAdmin>
                            )
                        })}
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default Admin