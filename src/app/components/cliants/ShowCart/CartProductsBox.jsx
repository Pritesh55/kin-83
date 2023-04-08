import Image from 'next/image';
import React, { useContext } from 'react'
import CartProduct from './CartProduct';
import { CartProductsContext } from '../../contexts/createContext';
import Link from 'next/link';

const CartProductsBox = ({ id, title, description, price, img, quantity, isAddedToCart }) => {

    //  userReducer 05 :: Destructuring if Object is inside Object ::
    const { item, clearCart } = useContext(CartProductsContext);

    return (
        <>

            <div className="px-10 flex flex-col gap-y-5">

                <div className="flex gap-x-10 justify-between">

                    {/* Continue Shopping */}
                    <Link href="/products" className="flex font-semibold text-purple-900 text-base items-center gap-x-2 bg-gray-200 px-8 py-2 rounded-s-full ">

                        <svg className="fill-current mr-2 text-purple-900 w-4" viewBox="0 0 448 512"><path d="M134.059 296H436c6.627 0 12-5.373 12-12v-56c0-6.627-5.373-12-12-12H134.059v-46.059c0-21.382-25.851-32.09-40.971-16.971L7.029 239.029c-9.373 9.373-9.373 24.569 0 33.941l86.059 86.059c15.119 15.119 40.971 4.411 40.971-16.971V296z" /></svg>

                        <span className="text-purple-900">
                            Continue Shopping
                        </span>

                    </Link>

                    <Link href='/products/cart/checkout' className='px-16 py-2 bg-yellow-300 text-black font-medium  text-lg border-2 border-red-500 rounded-e-full'> Checkout </Link>

                    {/* (clear Cart) 03 :: clearCart() call..*/}
                    {/* Clear cart */}
                    <button onClick={() => { clearCart(); }} className="px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg">
                        Clear cart
                    </button>
                </div>

                <div className="flex">
                    <h3 className="text-center lg:text-left font-semibold text-gray-600 text-2xl lg:text-base capitalize w-full lg:w-2/5">
                        <span className="lg:pl-[12%]">
                            Product Details
                        </span>
                    </h3>

                    <h3 className="font-semibold  text-gray-600 text-base capitalize w-1/5 text-center hidden lg:inline-block">
                        Unit Price
                    </h3>

                    <h3 className="font-semibold text-gray-600 text-base capitalize w-1/5 text-center hidden lg:inline-block">
                        Quantity
                    </h3>


                    <h3 className="font-semibold  text-gray-600 text-base capitalize w-1/5 text-center hidden lg:inline-block">
                        Total Price
                    </h3>

                    <h3 className="font-semibold  text-gray-600 text-base capitalize w-1/5 text-center hidden lg:inline-block">
                        Remove
                    </h3>
                </div>

                {/*  Products List */}
                <div className="flex flex-col gap-y-10">
                    {item.map((curItem, index) => {
                        return (
                            <CartProduct key={curItem.id}
                                {...curItem} >
                            </CartProduct>
                        )

                    })}
                </div>


            </div>



        </>
    )
}

export default CartProductsBox