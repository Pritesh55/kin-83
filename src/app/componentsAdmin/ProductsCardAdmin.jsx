"use client"
import axios from 'axios';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

//  ----------------------------------------------
//  03 :: fetcher :: 
import useSWR from 'swr';
// -----------------------------------------------

// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

//  ----------------------------------------------
//  01 :: fetcher :: 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// -----------------------------------------------------------------------

const ProductsCardAdmin = ({ id, title, description, price, img, quantity, isAddedToCart, isAdmin = false }) => {


    const [isAddedToCart4, setIsAddedToCart4] = useState();
    const [CountisAddedToCart4, setCountIsAddedToCart4] = useState(0);
 


    const isAddedToCart2 = async () => {

        // console.log(userEmailFull, "userEmailFull");

        await axios.get(`/api/cuser/now/${userEmailFull}`).then((response) => {
            // console.log(response.data);
            let myCart = response?.data?.userInfo?.cart;

            if (myCart != undefined) {


                let isAddedToCart3 = myCart.find(item => item.id == id);
                // console.log(isAddedToCart3, "isAddedToCart3");

                if (isAddedToCart3 != undefined) {
                    setIsAddedToCart4(true);
                    // console.log(true, "isAddedToCart3");

                } else {
                    setIsAddedToCart4(false);
                    // console.log(false, "isAddedToCart3");
                }


            }
            else {
                // console.log(false, "myCart");
            }
        });

        // setCountIsAddedToCart4(1);
        // console.log("Finish", "isAddedToCart3");
    }





    const { data: userNowData, error: userNowError, isLoading: userNowIsLoading } = useSWR(`/api/auth/session`, fetcher, { refreshInterval: 0.1 });

    let userEmailFull = userNowData?.user?.email;
    const router = useRouter();
    const refreshPage = () => {
        //this will reload the page without doing SSR
        router.refresh();
        router.refresh();
        router.refresh();
        // console.log('refreshPage');
    }

    if (userEmailFull == undefined) {
        userEmailFull = "guest";
    }

    const deleteProduct = async (id) => {

        await axios.delete(`/api/product/delete/${id}`).then((response) => {
            console.log(response.data);

        }, (error) => {
            console.log(error);
        });


        console.log("Go to axios");
        refreshPage();
    }

    const [idInput, setIdInput] = useState(`${id}`);
    const [titleInput, settTitleInput] = useState(`${title}`);
    const [descriptionInput, setDescriptionInput] = useState(`${description}`);
    const [priceInput, setPriceInput] = useState(`${price}`);


    const [isEdit, setIsEdit] = useState(false);

    const updateProduct = (id) => {
        setIsEdit(true);
    }

    const editdone = async () => {
        setIsEdit(false);

        await axios.put(`/api/product/update/${idInput}`, {
            oldId: id,
            newTitle: titleInput,
            newDescription: descriptionInput,
            newPrice: priceInput,
        })
            .then((response) => {
                console.log(response.data);
                refreshPage();
            });
    }

    const decProductQuantity = async () => {

        await axios.put(`/api/product/quantity/${idInput}`, {
            quantity: quantity - 1,

        })
            .then((response) => {
                console.log(response.data);
            });
        refreshPage();
        refreshPage();
    }

    const incProductQuantity = async () => {

        await axios.put(`/api/product/quantity/${idInput}`, {
            quantity: quantity + 1,
        })
            .then((response) => {
                console.log(response.data);

            });
        refreshPage();
        refreshPage();
    }

    const ucartAdd = async () => {

        await axios.put(`/api/cuser/cart`, {
            userEmail: `${userEmailFull}`,
            id: id,
            title: titleInput,
            description: descriptionInput,
            price: priceInput,
            quantity: quantity,
            // img: img,
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            isAddedToCart: true,

        }).then((response) => {
            console.log(response.data);
        });

        setCountIsAddedToCart4(0);
        console.log("ucartAdd Ended");
  
     

    }

    const ucartRemove = async () => {

        await axios.delete(`/api/cuser/now/${userEmailFull}/${id}`).then((response) => {
            console.log(response.data);


        });
        setCountIsAddedToCart4(0);
        console.log("ucartRemove Ended");

  
      
    }

    if (CountisAddedToCart4 == 0) {
        isAddedToCart2();
     
    }


    return (

        <>



            <div className="flex flex-col items-start border-orange-400 border-2 rounded-lg px-10 pt-5 pb-5 w-full h-max max-w-[100%] md:max-w-[45%]">

                <div className=''>{`${userEmailFull}`} </div>

                {/* id */}
                <div className="relative w-full ">

                    {
                        (isEdit == false && isAdmin) &&
                        <>

                            <button onClick={() => { updateProduct(id); }} className="absolute -top-5 -left-10 px-3 py-1 border-r-2 border-b-2 border-r-orange-400 border-b-orange-400 rounded-br-lg text-base z-50">
                                {/* <Image src='/trash.svg' alt='' width={20} height={20} className=''></Image> */}

                                {`Edit`}
                            </button>
                        </>

                    }


                    {
                        (isEdit && isAdmin) &&
                        <>
                            <button onClick={() => { editdone(); }} className="absolute -top-5 -left-10 px-3 py-1 border-r-2 border-b-2 border-r-orange-400 border-b-orange-400 rounded-br-lg text-base z-50">
                                {/* <Image src='/trash.svg' alt='' width={20} height={20} className=''></Image> */}

                                {`Edit done`}
                            </button>
                        </>
                    }

                    <div className="relative">

                        {
                            (isEdit == false) &&
                            <>
                                <h6 className="mb-2 text-2xl font-semibold text-orange-500 text-center min-h-[40px] flex justify-center">
                                    <span className="">
                                        {`${id}`}
                                    </span>

                                </h6>

                            </>
                        }


                        {


                            (isEdit) &&
                            <>
                                <div className="mb-2 text-2xl font-semibold text-orange-500 text-center min-h-[40px] flex justify-center ">

                                    <div className="absolute z-10">

                                        <input type='number' className="mb-2 text-2xl font-semibold text-orange-500 text-center " value={idInput}
                                            onChange={(event) => {
                                                setIdInput(event.target.value);
                                                console.log(idInput);
                                            }}>
                                        </input>
                                    </div>

                                </div>
                            </>


                        }

                    </div>


                    {
                        (isAdmin) &&
                        <>
                            <button onClick={() => { deleteProduct(id); }} className="absolute -top-5 -right-10 z-50 px-3 py-2 border-l-2 border-b-2 border-l-orange-400 border-b-orange-400 rounded-bl-lg">
                                <Image src='/trash.svg' alt='' width={20} height={20} className=''></Image>
                            </button>
                        </>
                    }



                </div>

                <hr className='border-t-2 border-orange-400 w-full' />

                <div className="w-full h-full pt-4 flex flex-col gap-y-5 md:flex-row gap-x-8 items-center">

                    {/* Image */}
                    <Image src={(img) ? img : 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'} alt="team" width={64} height={64} className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full" />

                    <div className="flex flex-col gap-y-4 w-full">

                        {/* Title and description */}
                        <div className="flex flex-col items-center md:items-start">

                            {
                                (isEdit == false) &&
                                <>
                                    <h2 className="text-xl text-gray-900 font-medium">
                                        {title}
                                    </h2>

                                </>
                            }

                            {
                                (isEdit == true) &&
                                <>

                                    <div className="w-full min-h-[35px] relative">

                                        <div className="absolute z-10 flex items-center">

                                            <input type='text' className="text-xl text-gray-900 font-medium w-full" value={titleInput}
                                                onChange={(event) => {
                                                    settTitleInput(event.target.value);
                                                    console.log(titleInput);
                                                }}>
                                            </input>
                                        </div>

                                    </div>

                                </>
                            }


                            {
                                (isEdit == false) &&
                                <>
                                    <p className="text-sm text-gray-500">
                                        {description}
                                    </p>
                                </>
                            }

                            {
                                (isEdit == true) &&
                                <>
                                    <div className="w-full min-h-[25px] relative">

                                        <div className="absolute z-10 flex items-center">

                                            <input type='text' className="text-sm text-gray-500 w-full" value={descriptionInput}
                                                onChange={(event) => {
                                                    setDescriptionInput(event.target.value);
                                                    console.log(descriptionInput);
                                                }}>
                                            </input>

                                        </div>
                                    </div>
                                </>
                            }

                        </div>

                        {/* Price */}
                        <div className="flex justify-center md:justify-start gap-x-2 text-2xl text-black font-semibold ">

                            {
                                (isEdit == false) &&
                                <>

                                    <p className="text-2xl text-black font-semibold">
                                        {`${price} ₹`}
                                    </p>
                                </>
                            }

                            {
                                (isEdit == true) &&
                                <>
                                    <div className="w-full min-h-[40px] relative">

                                        <div className="absolute z-10 flex gap-x-2 items-center max-w-full">

                                            <input id='productPrice' type='number' className="text-2xl text-black font-semibold max-w-full" value={priceInput}
                                                onChange={(event) => {
                                                    setPriceInput(event.target.value);
                                                    console.log(priceInput);
                                                }}>
                                            </input>


                                        </div>


                                    </div>
                                </>
                            }

                        </div>

                        {/* Quantity */}
                        <div className="flex flex-col gap-y-1 items-center font-semibold  w-full sm:w-1/2 lg:w-1/4 prevent-select mx-auto md:mx-0">

                            {/* Quantity */}
                            <div className="flex justify-center ">

                                {/* Minus Icon */}
                                <svg
                                    // (decProductQuantity) 01 :: Call incProductQuantity function on Click on Plus Icon....
                                    onClick={() => { decProductQuantity(); }} className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" ><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>

                                {/* Product Quantity */}
                                <input className="mx-2 prevent-select text-lg border text-center w-8" type="text" value={quantity} readOnly />

                                {/* Plus Icon */}
                                <svg className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512"
                                    // (incProductQuantity) 01 :: Call incProductQuantity function on Click on Plus Icon....
                                    onClick={() => { incProductQuantity(id); }}>

                                    <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                                </svg>
                            </div>

                            <span className="lg:hidden text-sm text-orange-400">
                                Product Quantity
                            </span>
                        </div>

                        <div className="">
                            {`Total : ${price * quantity}`}
                        </div>

                        {/* Add to cart , Remove from cart */}
                        <div className="flex flex-col gap-y-4 items-center md:items-start">


                            {/* ------------------------------------------------------------------- */}

                            <div className="flex flex-col md:flex-row items-center flex-wrap gap-x-2 gap-y-4">

                                <button onClick={() => {
                                    // setIsAddedToCart4(true);
                                    ucartAdd();
                         
                                }} className="flex px-4 py-2 bg-orange-200 text-black text-sm font-medium rounded-md text-center">
                                    Add to uCart
                                </button>

                                <button onClick={() => {
                                    // setIsAddedToCart4(false);
                                    ucartRemove();
                     
                                }} className="flex px-4 py-2 bg-orange-200 text-black text-sm font-medium rounded-md text-center">
                                    Remove from ucart
                                </button>
                            </div>

                            <h1 className="text-orange-600 font-medium text-xl capitalize">
                                {`Now : ${isAddedToCart4}`}
                            </h1>

                            {/* ------------------------------------------------------------------- */}

                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default ProductsCardAdmin