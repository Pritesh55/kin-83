'use client';

// userReducer 02 :: import ( useReducer hook )from React ::
import React, { useReducer } from "react";

// userReducer 03 :: Define (reducer) Object ::
import { reducer } from '@/app/context/reducer';

// userReducer 05 :: import (products) Array of Objects :: 
// It is used in initialState Object....
import { products, products1, products2 } from '@/app/context/products';

// userReducer 06 :: import (useEffect) from React ::
// It is used (to preserve state) in Dispatch action....
import { useEffect } from "react";

// Context API 02 :: createContext :: import createContext hook....
import { CartProductsContext } from './createContext';

{/* Context API 05 :: import child Component  */ }
import ShowProducts from '../cliants/ShowProducts';



// userReducer 04 :: define (initialState) Object ::
const initialState = {
    item: products,
    totalItem: 0,
    totalAmount: 0,
}


// const CartProductsContextComponent = ({kyoData}) => {
{/* @ts-expect-error Async Server Component */ }
const CartProductsContextComponent = ({ children, ...pageProps }) => {
    let products13 = pageProps.productsArrayFS;

    console.log("Enter 0");
    // userReducer 01 :: create (userReducer) hook....
    const [state, dispatch] = useReducer(reducer, initialState);


    //  (Remove Product from Cart) 02 :: Define onClick Function removeItem().. 
    const addToCart = (id) => {
        // (Remove Product from Cart) 03 :: Call dispatch function....
        return dispatch(
            {
                type: "ADD_TO_CART",
                payLoad: id
            }
        );
    };

    //  (Remove Product from Cart) 02 :: Define onClick Function removeItem().. 
    const removeItem = (id) => {
        // (Remove Product from Cart) 03 :: Call dispatch function....
        return dispatch(
            {
                type: "REMOVE_ITEM",
                payLoad: id
            }
        );
    };


    // (clear Cart) 02 :: define clearCart function....
    const clearCart = () => {
        // (clear Cart) 03 :: Call dispatch Method....
        return dispatch(
            {
                type: "REMOVE_ALL_ITEM_TO_CLEAR_CART"
            }
        );
    }

    // (incProductQuantity) 02 :: define incProductQuantity function....
    const incProductQuantity = (id) => {
        // (clear Cart) 03 :: Call dispatch Method....
        return dispatch(
            {
                type: "INCREMENT_PRODUCT_QUANTITY",
                payLoad: id,
            }
        );
    }

    // (incProductQuantity) 02 :: define incProductQuantity function....
    const decProductQuantity = (id) => {

        // (clear Cart) 03 :: Call dispatch Method....
        return dispatch(
            {
                type: "DECREMENT_PRODUCT_QUANTITY",
                payLoad: id,
            }
        );
    }



    useEffect(() => {
        dispatch(
            {
                type: "TOTAL_ITEM",

            }
        );
    }, [state.item]);



    // ----------------------------------------------------------

    console.log(`Your state = ${state.item}`);

    return (

        <>

            {/* Context API 03 :: Provider  */}
            {/* :: to Provide (data) to on object {} */}
            {/* Create {{ }} :: creating Empty object */}
            {/* :: insert data of (Array) by Spread operator(...) */}
            {/* :: insert other data normally after that */}
            <CartProductsContext.Provider value={{ ...state, addToCart, removeItem, clearCart, incProductQuantity, decProductQuantity }}>
                {/* Context API 04 :: Call Child Component  */}
                {/* {children} */}
                {
                    (children)
                }
            </CartProductsContext.Provider>
        </>



    )
}

export default CartProductsContextComponent