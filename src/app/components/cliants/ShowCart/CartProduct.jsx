import Image from 'next/image';
import React, { useContext } from 'react'
import { CartProductsContext } from '../../contexts/createContext';

const CartProduct = ({ id, title, description, price, img, quantity, isAddedToCart }) => {
   
    const { removeItem, incProductQuantity, decProductQuantity } = useContext(CartProductsContext);

    if (isAddedToCart === true) {
        return (
            <div className="flex gap-y-10 xl:gap-y-20 justify-center md:justify-between items-center flex-wrap hover:bg-gray-100 rounded-lg py-10 md:py-5 border-2 md:border-b-2 border-orange-400 ">
                {/* <!-- product Image and Name --> */}
                <div className="md:max-w-[40%] lg:max-w-none lg:w-1/4 px-4 flex justify-center lg:justify-start gap-5 flex-wrap">

                    <div className="">
                        <Image className="w-24 h-24" src={img} alt="" 
                        width={96} height={96} />
                    </div>

                    <div className="flex flex-col justify-center items-center lg:items-start flex-grow w-full lg:w-auto">
                        <div className="flex flex-col justify-center items-center lg:items-start gap-y-2 w-auto">

                            {/* Product Name */}
                            <span className="font-bold text-sm ">
                                {title}
                            </span>

                            {/* Product Description */}
                            <span className="text-red-500 text-xs">
                                {description}
                            </span>
                        </div>

                    </div>

                </div>

                <div className="md:max-w-[60%] lg:max-w-none w-full lg:w-3/4 flex justify-between lg:justify-start items-center lg:gap-x-5 gap-y-10 flex-wrap lg:flex-nowrap">

                    {/* Unit Price */}
                    <span className="flex flex-col gap-y-1 items-center w-full sm:w-1/2 lg:w-1/4 font-semibold text-lg prevent-select">
                        <span className="">
                            {price} ₹
                        </span>

                        {/* Unit Price */}
                        <span className="lg:hidden text-sm text-orange-400">
                            Unit Price
                        </span>
                    </span>

                    {/* Quantity */}
                    <div className="flex flex-col gap-y-1 items-center font-semibold  w-full sm:w-1/2 lg:w-1/4 prevent-select">

                        {/* Quantity */}
                        <div className="flex justify-center ">

                            {/* Minus Icon */}
                            <svg
                                // (decProductQuantity) 01 :: Call incProductQuantity function on Click on Plus Icon....
                                onClick={() => { decProductQuantity(id); }} className="fill-current text-gray-600 w-3 cursor-pointer" viewBox="0 0 448 512" ><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
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


                    {/* Total Price */}
                    <span className="flex flex-col text-center  w-full sm:w-1/2 lg:w-1/4 font-semibold text-lg">
                        <span className="do-select">
                            {price * quantity} ₹
                        </span>

                        {/* Unit Price */}
                        <span className="lg:hidden text-sm text-orange-400 ">
                            Total Price
                        </span>
                    </span>



                    {/* (Remove Product from Cart) 01 :: call onClick Function.. */}
                    <div onClick={() => { removeItem(id); }} className="cursor-pointer w-full sm:w-1/2 lg:w-max mx-auto font-semibold hover:text-red-500 text-gray-500 text-xs text-center flex justify-end gap-x-10 prevent-select">

                        <Image src="/trash.svg" alt="trash.svg" width={24}
                        height={24}
                        className='w-6 h-6 mx-auto svg-convert-to-red' />
                    </div>


                </div>

            </div>
        )
    }

    else return (<></>);
}

export default CartProduct