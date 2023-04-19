
import React, { useContext} from 'react'
import CartProductsContextComponent from '../contexts/CartProductsContextComponent';



export const AddToCartHeader = ({children}) => {

    // const { totalItem, totalAmount } = useContext(CartProductsContextComponent);

    return (
        <div className="flex justify-between px-10 gap-x-20 h-16">
                      
            <div className="flex gap-x-20 justify-center items-center sm:justify-between flex-wrap gap-y-5 px-20 py-2 bg-yellow-300 rounded-t-full w-full">

                <div className="font-semibold text-xl">Shopping Cart</div>
                {/* <div className="font-semibold text-xl">{totalItem} Items</div> */}
                {/* <div className="font-semibold text-xl">{totalAmount} Rs</div> */}
                
            </div>

            {children}



        </div>
    )
}
