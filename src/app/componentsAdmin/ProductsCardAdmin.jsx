"use client"
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const ProductsCardAdmin = ({ id, title, description, price, img, quantity, isAddedToCart }) => {

    const router = useRouter();

    const refreshPage = () => {
        //this will reload the page without doing SSR

        router.refresh();
        router.refresh();
        router.refresh();
        console.log('refreshPage');
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
    const [isAddedToCartInput, setIsAddedToCartInput] = useState(isAddedToCart);

    const [isEdit, setIsEdit] = useState(false);

    const updateProduct = (id) => {
        setIsEdit(true);
    }

    const editdone = async () => {

        setIsEdit(false);
        console.log(`past -----  Database :: ${isAddedToCart}`);
        console.log(`past -----  newIsAddedToCart :: ${isAddedToCartInput}`);

        let a = isAddedToCartInput;
        (a == true) ? a = false : a = true;
        setIsAddedToCartInput(a);
        console.log(`a is ${a}`)
        console.log(`new ----    newIsAddedToCart :: ${isAddedToCartInput}`);

        await axios.put(`/api/product/update/${idInput}`, {
            oldId: id,
            newTitle: titleInput,
            newDescription: descriptionInput,
            newPrice: priceInput,

            newIsAddedToCart: a
        })
            .then((response) => {
                console.log(response.data);
                refreshPage();
                refreshPage();
                refreshPage();
            });
    }

    console.log(titleInput);

    return (
        <>

            <div className="flex flex-col items-start border-orange-400 border-2 rounded-lg px-10 pt-5 pb-5 w-full h-max max-w-[100%] md:max-w-[45%]">

                {/* id */}
                <div className="relative w-full ">

                    {
                        (isEdit == false) &&
                        <>

                            <button onClick={() => { updateProduct(id); }} className="absolute -top-5 -left-10 px-3 py-1 border-r-2 border-b-2 border-r-orange-400 border-b-orange-400 rounded-br-lg text-base z-50">
                                {/* <Image src='/trash.svg' alt='' width={20} height={20} className=''></Image> */}

                                {`Edit`}
                            </button>
                        </>

                    }


                    {
                        (isEdit) &&
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
                        (isEdit) &&
                        <></>
                    }

                    <button onClick={() => { deleteProduct(id); }} className="absolute -top-5 -right-10 z-50 px-3 py-2 border-l-2 border-b-2 border-l-orange-400 border-b-orange-400 rounded-bl-lg">
                        <Image src='/trash.svg' alt='' width={20} height={20} className=''></Image>
                    </button>

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

                        {/* Add to cart , Remove from cart */}
                        <div className="flex flex-col gap-y-4 items-center md:items-start">

                            <div className="flex flex-col md:flex-row items-center flex-wrap gap-x-2 gap-y-4">

                                <button onClick={() => {
                                    setIsEdit(true);
                                    editdone();
                                }} className="flex px-4 py-2 bg-orange-200 text-black text-sm font-medium rounded-md text-center">
                                    Add to cart
                                </button>

                                <button onClick={() => {
                                    setIsEdit(true);
                                    editdone();
                                }} className="flex px-4 py-2 bg-orange-200 text-black text-sm font-medium rounded-md text-center">
                                    Remove from cart
                                </button>
                            </div>

                            <h1 className="text-orange-600 font-medium text-xl capitalize">

                                {`Now : ${isAddedToCart}`}
                            </h1>
                        </div>

                    </div>
                </div>

            </div >
        </>
    )
}

export default ProductsCardAdmin