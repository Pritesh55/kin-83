"use client"

import React, { useState } from 'react';
import { useRouter } from "next/navigation";
import axios from 'axios';

const ApiNavbar = () => {

    const router = useRouter();

    const refreshPage = () => {
        //this will reload the page without doing SSR

        router.push('/admin');
        router.push('/admin');
        router.push('/admin');
        console.log('refreshPage');
    }

    const [isOpenCNP, setisOpenCNP] = useState(false);
    const [id, setId] = useState('');
    const [title, settitle] = useState('');
    const [description, setdescription] = useState('');
    const [price, setprice] = useState('');
    const [img, setimg] = useState('https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
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



    const deleteAll = async () => {

        await axios.delete(`/api/product/deleteall`).then((response) => {
            console.log(response);

        }, (error) => {
            console.log(error);
        });

        console.log("Go to axios");
        refreshPage();

    }

    const addAll = async () => {

        await axios.post('/api/product/addall').then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });

        console.log("Go to axios");
        refreshPage();
    }

    const readAll = async () => {

        await axios.get('/api/product/read').then((response) => {
            console.log(response.data);
        }, (error) => {
            console.log(error);
        });

        console.log("Go to axios");
        refreshPage();
    }



    return (
        <>

            <ul className="flex justify-center lg:justify-start items-center gap-x-5 flex-wrap gap-y-5">

                <button onClick={() => { readAll(); }}  className='text-sm lg:text-lg pl-1.5 pr-3 lg:pl-3 lg:pr-6lg:py-1 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    Read
                </button>

                <button onClick={() => { addAll(); }}  className='text-sm lg:text-lg pl-1.5 pr-3 lg:pl-3 lg:pr-6 lg:py-1 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    Add all
                </button>

                <button onClick={() => { deleteAll(); }}  className='text-sm lg:text-lg pl-1.5 pr-3 lg:pl-3 lg:pr-6 lg:py-1 py-2 bg-yellow-500 text-black rounded-r-full h-max'>
                    delete all
                </button>

                <button className="text-sm lg:text-lg pl-1.5 lg:pl-5 pr-5 lg:pr-10 lg:py-1 py-2 lg:pt-4 lg:pb-4 bg-yellow-400 text-black rounded-br-[32px] lg:rounded-br-[64px] flex justify-center items-center"
                    onClick={() => { refreshPage() }}>
                    Refresh
                </button>


                {/*  className={`text-sm lg:text-lg h-max w-max text-black 
                pl-6 pr-12 py-4 rounded-r-full bg-yellow-400
               `}
                // ${!isOpenCNP && 'pl-6 pr-12 py-4 rounded-r-full bg-yellow-400'}  
                // ${isOpenCNP && 'px-6 py-4 ml-auto mr-2 rounded-full bg-yellow-500'} */}
                <button className={`inline text-sm lg:text-lg pl-1.5 pr-3 lg:pl-3 lg:pr-6 py-2 text-black rounded-r-full h-max
                 ${!isOpenCNP && 'bg-yellow-500'}   
                ${isOpenCNP && ' bg-yellow-400'}`}

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
            </ul>

            <div className={`inline-flex flex-col items-start ${!isOpenCNP && 'hidden'}`}>

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

                            <input type="text" id="product_img" className='text-sm bg-white rounded-lg px-4 py-4 h-8 cursor-pointer' name="product_img"
                                defaultValue={img}

                            />
                        </div>

                        <div className="flex gap-x-10 items-center text-xl w-full">

                            <label htmlFor="first" className='w-1/2'>
                                Product quantity :
                            </label>

                            <input type="text" id="product_quantity" className='text-sm bg-white rounded-lg px-4 py-4 h-8 cursor-pointer' name="product_quantity"
                                defaultValue={quantity}


                            />
                        </div>

                        <div className="flex gap-x-10 items-center text-xl w-full">

                            <label htmlFor="first" className='w-1/2'>
                                Product isAddedToCart :
                            </label>

                            <input type="text" id="product_isAddedToCart" className='text-sm bg-white rounded-lg px-4 py-4 h-8 cursor-pointer' name="product_isAddedToCart"
                                defaultValue={isAddedToCart}


                            />
                        </div>

                        <button className='text-sm lg:text-lg bg-yellow-400 rounded-r-full pl-6 pr-8 py-3 mt-5 mb-3 mx-auto' type='submit'
                        >
                            Create New Product
                        </button>
                    </form>
                }

            </div>

        </>
    )
}

export default ApiNavbar