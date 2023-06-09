'use client';
import Image from 'next/image';
import React, { useContext } from 'react'
import { CartProductsContext } from '../contexts/createContext';
import { AddToCartHeader } from './AddToCartHeader';

const ProductsCard = ({ id, title, description, price, img, quantity,isAddedToCart }) => {


    const { addToCart } = useContext(CartProductsContext);


    return (
        <>

            <div className="w-max max-w-sm border-orange-400 border-2 rounded-lg px-10 pt-5 pb-5 h-max">

                <h6 className="mb-2 text-2xl font-semibold text-orange-500 text-center">{`${id}`}</h6>

                <hr className='border-t-2 border-orange-400' />

                <div className="h-full pt-4 flex gap-x-8 items-center ">

                    <Image src={img} alt="team" width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />

                    <div className="flex-grow flex flex-col gap-y-4">

                        <div className="">

                            <h2 className="text-xl text-gray-900 font-medium">
                                {title}
                            </h2>

                            <p className="text-sm text-gray-500">
                                {description}
                            </p>
                        </div>


                        <p className="text-2xl text-black font-semibold">
                            {`${price} ₹`}
                        </p>

                        <button onClick={() => { addToCart(id); }} className="flex px-4 py-2 bg-orange-200 text-black text-base font-medium rounded-md text-center">
                            Add to cart
                        </button>

                        <h1 className="text-orange-600 font-medium text-xl capitalize">
                            {`Now : ${isAddedToCart} `}
                        </h1>
                    </div>
                </div>
            </div>




        </>
    )
}

export default ProductsCard