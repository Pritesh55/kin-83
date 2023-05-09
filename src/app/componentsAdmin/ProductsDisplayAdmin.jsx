"use client"

import React, { useState } from 'react'
import ApiNavbar from '../components/cliants/ApiNavbar';
import SortProductsDisplay from './data/SortProductsDisplay';
import ReadProductsDisplay from './data/ReadProductsDisplay';
import Link from 'next/link';
import Image from 'next/image';
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/navigation';
{/* ---------------------------------- */ }
// 01 :: session
import { SessionProvider } from 'next-auth/react';
{/* ---------------------------------- */ }

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ProductsDisplayAdmin = ({ isAdmin = false, isCart = false,
    //  -----------------
    // 02 :: session
    // ------------------
    session
}) => {
    const router = useRouter();
    const { data, error, isLoading } = useSWR("/api/product/read", fetcher, { refreshInterval: 1 });


    const [isSort, setIsSort] = useState(false);
    const [total, setTotal] = useState();

    if (error) {
        return (<> Error </>);
    }

    if (isLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!data) {
        return (<> data not found </>);
    }



    const refreshPage = () => {
        //this will reload the page without doing SSR

        router.refresh();
        router.refresh();
        router.refresh();
        console.log('refreshPage');
    }

    let readProducts = data.readptModels2;



    let catPtoducts = readProducts.filter(item => item.isAddedToCart == true);


    let totalPricePerProduct = 0;
    let totalAmount = catPtoducts.reduce(
        (acc, currentItem) => {
            totalPricePerProduct = currentItem.price * currentItem.quantity;
            return acc + parseInt(totalPricePerProduct);
        }, 0
    );


    let totalItem = catPtoducts.reduce(
        (acc, currentItem) => {
            acc = (currentItem.isAddedToCart) ? acc + currentItem.quantity : acc
            return acc
        }, 0
    );


    const clearCart = async () => {

        await axios.put(`/api/product/cart/clearAll`)
            .then((response) => {
                console.log(response.data);

            });
        refreshPage();
    }


    // -----------------------------------------------
    const deleteAllUser = async () => {

        await axios.delete(`/api/cuser/deleteAllUser`).then((response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });

        console.log("Go to axios");
        refreshPage();

    }
    // -----------------------------------------------

    
 

    return (
        <>
            <ul className="flex flex-col items-center lg:flex-row justify-between gap-x-5 flex-wrap gap-y-5 ">

                {
                    (isAdmin) &&
                    <>
                        <ApiNavbar></ApiNavbar>
                    </>
                }

                {
                    (isAdmin) &&
                    <>

                        <div className="flex gap-x-10 flex-wrap">
                            <a href='/api/cuser' className="px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg">
                                See All User
                            </a>

                            <button onClick={() => { deleteAllUser(); }} className="px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg">
                                delete All User
                            </button>

                        </div>

                    </>
                }


                <div className="flex flex-wrap gap-x-5 items-center h-20">
                    <a onClick={() => { setIsSort(false); }} className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max cursor-pointer'>
                        Read
                    </a>

                    <a onClick={() => { setIsSort(true); }} className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max cursor-pointer'>
                        Sort
                    </a>
                </div>


                {
                    (!isAdmin) &&
                    <>
                        <Link href="/cart" className="bg-yellow-300 rounded-full p-5 border-red-500 border-2">
                            <Image src='/cart-icon.svg' alt='cart' width={32} height={32} className=' svg-convert-to-black '></Image>
                        </Link>
                    </>
                }

                {
                    (!isAdmin) &&
                    <>
                        <div className="flex gap-x-20 justify-center items-center sm:justify-between flex-wrap gap-y-5 px-10 py-2 bg-yellow-300 rounded-t-full ">
                            {
                                (!isAdmin) &&
                                <>
                                    <div className="">
                                        <span className="text-2xl">
                                            {`${totalItem} Items`}
                                        </span>
                                    </div>

                                </>
                            }

                            {
                                (!isAdmin) &&
                                <>
                                    <div className="">
                                        <span className="text-xl">
                                            {`Total : `}
                                        </span>
                                        <span className="text-2xl">
                                            {`${totalAmount} ₹`}
                                        </span>
                                    </div>

                                </>
                            }

                        </div>
                    </>
                }

                <div className="w-full flex justify-between">

                    {
                        (!isAdmin && isCart == true) &&
                        <>
                            <Link href="/" className="flex font-semibold text-purple-900 text-base items-center gap-x-2 bg-gray-200 px-8 py-2 rounded-s-full ">

                                <svg className="fill-current mr-2 text-purple-900 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>

                                <span className="text-purple-900">
                                    Continue Shopping
                                </span>

                            </Link>

                            <Link href="/cart/checkout" className="px-16 py-2 bg-yellow-300 text-black font-medium  text-lg border-2 border-red-500 rounded-e-full">

                                <span className="">
                                    Continue Checkout
                                </span>

                            </Link>

                            <button onClick={() => { clearCart() }} className="px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg">Clear cart</button>
                        </>
                    }
                    {
                        (!isAdmin && isCart == false) &&
                        <>
                            <button onClick={() => { clearCart() }} className="px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg ml-auto">Clear cart</button>
                        </>
                    }






                </div>

            </ul>

            <hr />


            <div className='flex flex-wrap gap-x-5 xl:gap-x-10 gap-y-10 justify-evenly pb-10'>

                {/* ---------------------------------- */}
                {/* // 03 :: session */}
                {/* ---------------------------------- */}
                <SessionProvider session={session}>
                    {
                        (isSort == true) &&
                        <SortProductsDisplay isAdmin={isAdmin} isCart={isCart}></SortProductsDisplay>
                    }
                    {
                        (isSort == false) &&
                        <ReadProductsDisplay isAdmin={isAdmin} isCart={isCart} ></ReadProductsDisplay>
                    }
                </SessionProvider>
            </div >
        </>
    )
}

export default ProductsDisplayAdmin