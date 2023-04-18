"use client"
import Link from 'next/link'
import React, { useState } from 'react'

import { useRouter } from "next/navigation";
import axios from 'axios';

const ApiNavbar = () => {

    const router = useRouter();

    const refreshPage = () => {
        //this will reload the page without doing SSR
        router.refresh();
        console.log('refreshPage');
    }
    const [isOpenCNP, setisOpenCNP] = useState(false);
    const [id, setId] = useState('');
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [img, setimg] = useState('');
    const quantity = 1;
    const isAddedToCart = false;


    const createProduct = async (ev) => {

        ev.preventDefault();

        const productPostData = { id, title, description, price, img, quantity, isAddedToCart };

        console.log(productPostData);

        await axios.post('/api/product/post', productPostData, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            console.log(response);
        }, (error) => {
            console.log(error);
        });


        console.log("Go to axios");

        setisOpenCNP(!isOpenCNP);
        refreshPage();

        setId('');
        settitle('');
        setdescription('');
        setprice('');
        setimg('');
    }




    return (
        <>

            <ul className="flex gap-x-5 flex-wrap gap-y-5 pb-10">

                <h1 className="">
                    {process.env.NODE_ENV} { }
                </h1>

                <Link href='/api/product/sort' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    Sort
                </Link>

                <Link href='/api/product/read' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    Read
                </Link>

                <a href='/api/product/addall' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    Add all
                </a>

                <a href='/api/product/deleteall' target='_blank' className='text-lg pl-3 pr-6 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    delete all
                </a>

                <button className="text-lg pl-5 pr-10 pt-4 pb-4 bg-yellow-400 text-black rounded-br-[64px] flex justify-center items-center" onClick={() => { refreshPage(); }}> Refresh</button>
            </ul>

            <div className="">

                <div className={`inline-flex flex-col ${!isOpenCNP && 'gap-y-5 my-3'}`}>

                    <button className={`text-lg h-max w-max text-black 

                    ${!isOpenCNP && 'pl-6 pr-12 py-4 rounded-r-full bg-yellow-400'} 

                    ${isOpenCNP && 'px-6 py-4 ml-auto mr-2 rounded-full bg-yellow-500'}`}

                        onClick={() => {
                            setisOpenCNP(!isOpenCNP);
                        }}
                    >
                        {
                            !isOpenCNP ?
                                'Create New Product '
                                : 'Close'
                        }
                    </button>

                    {/* <!-- Basic HTML Form --> */}

                    {isOpenCNP &&

                        <form onSubmit={createProduct} className={`bg-slate-200 inline-flex flex-col gap-y-5 justify-start items-start px-10 py-5 rounded-xl`}>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product Id :
                                </label>

                                <input type="text" id="product_Id" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_Id"
                                    value={id}
                                    onChange={
                                        (uvObject) => {
                                            setId(uvObject.target.value);
                                        }
                                    }
                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product title :
                                </label>

                                <input type="text" id="product_title" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_title"
                                    value={title}
                                    onChange={
                                        (uvObject) => {
                                            settitle(uvObject.target.value);
                                        }
                                    }
                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product description :
                                </label>

                                <input type="text" id="product_description" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_description"
                                    value={description}
                                    onChange={
                                        (uvObject) => {
                                            setdescription(uvObject.target.value);
                                        }
                                    }
                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product price :
                                </label>

                                <input type="text" id="product_price" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_price"
                                    value={price}
                                    onChange={
                                        (uvObject) => {
                                            setprice(uvObject.target.value);
                                        }
                                    }
                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product img :
                                </label>

                                <input type="text" id="product_img" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_img"
                                    value={img}
                                    onChange={
                                        (uvObject) => {
                                            setimg(uvObject.target.value);
                                        }
                                    }
                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product quantity :
                                </label>

                                <input type="text" id="product_quantity" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_quantity"
                                    defaultValue={quantity}


                                />
                            </div>

                            <div className="flex gap-x-10 items-center text-xl w-full">

                                <label htmlFor="first" className='w-1/2'>
                                    Product isAddedToCart :
                                </label>

                                <input type="text" id="product_isAddedToCart" className='text-sm bg-white rounded-lg px-4 py-4 h-8' name="product_isAddedToCart"
                                    defaultValue={isAddedToCart}


                                />
                            </div>

                            <button className='text-lg bg-yellow-400 rounded-r-full pl-6 pr-8 py-3 mt-5 mb-3 mx-auto' type='submit'
                            >
                                Create New Product
                            </button>
                        </form>
                    }

                </div>


            </div>



        </>
    )
}

export default ApiNavbar