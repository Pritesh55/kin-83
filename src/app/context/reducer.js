export const reducer = (state, action) => {

    // (Remove Product from Cart) 04 :: Return the products which id is not equal to the id which user Click to remove......
    if (action.type === "ADD_TO_CART") {

        let updatedCartProduct = state.item.map(
            (curProduct) => {
                if (curProduct.id === action.payLoad) {
                    // curProduct.quantity = curProduct.quantity + 1;
                    return { ...curProduct, isAddedToCart: true }
                }

                return curProduct;
            }
        );

        return {
            // destructure the intialState object into key-value pairs....
            ...state,
            // Update the first key (item) by filter method...
            item: updatedCartProduct,
        }
    }

    // (Remove Product from Cart) 04 :: Return the products which id is not equal to the id which user Click to remove......
    if (action.type === "REMOVE_ITEM") {

        let updatedCartProduct = state.item.map(
            (curProduct) => {
                if (curProduct.id === action.payLoad) {
                    // curProduct.quantity = curProduct.quantity + 1;
                    return { ...curProduct, isAddedToCart: false }
                }

                return curProduct;
            }
        );

        return {
            // destructure the intialState object into key-value pairs....
            ...state,
            // Update the first key (item) by filter method...
            item: updatedCartProduct,
        }


        // return {
        //     // destructure the intialState object into key-value pairs....
        //     ...state,
        //     // Update the first key (item) by filter method...
        //     item: state.item.filter(
        //         // filter method On array (of Objects)
        //         (curProduct) => {
        //             // All the object will be called one by one...
        //             // curProduct is One single Object...
        //             return curProduct.id !== action.payLoad
        //         }
        //     )
        // }
    }

    // 04 :: 
    if (action.type === "REMOVE_ALL_ITEM_TO_CLEAR_CART") {

        let updatedCartProduct = state.item.map(
            (curProduct) => {
                if (true) {
                    // curProduct.quantity = curProduct.quantity + 1;
                    return { ...curProduct, isAddedToCart: false }
                }
            }
        );

        return {
            // destructure the intialState object into key-value pairs....
            ...state,
            // Update the first key (item) by filter method...
            item: updatedCartProduct,
        }

        // return {
        //     // destructure the intialState object into key-value pairs....
        //     ...state,
        //     // Update the first key (item) by filter method...
        //     item: [],
        // }
    }

    // 04 :: 
    if (action.type === "INCREMENT_PRODUCT_QUANTITY") {

        let updatedCartProduct = state.item.map(
            (curProduct) => {
                if (curProduct.id === action.payLoad) {
                    // curProduct.quantity = curProduct.quantity + 1;
                    return { ...curProduct, quantity: curProduct.quantity + 1 }
                }

                return curProduct;
            }
        );

        return {
            // destructure the intialState object into key-value pairs....
            ...state,
            // Update the first key (item) by filter method...
            item: updatedCartProduct,
        }
    }

    // 04 :: 
    if (action.type === "DECREMENT_PRODUCT_QUANTITY") {

        const updatedCartProduct = state.item.map(
            (curProduct) => {
                if (curProduct.id === action.payLoad) {
                    // curProduct.quantity = curProduct.quantity + 1;

                    if (curProduct.quantity > 1) {
                        return { ...curProduct, quantity: curProduct.quantity - 1 };
                    } else

                        return {
                            ...curProduct,
                            isAddedToCart: false
                        };

                }

                return curProduct;
            }
        )

        return {
            // destructure the intialState object into key-value pairs....
            ...state,
            // Update the first key (item) by filter method...
            item: updatedCartProduct,
        }
    }



    if (action.type === "TOTAL_ITEM") {

        let { totalItem, totalAmount } = state.item.reduce(
            // fat arrow function
            (acc, curObject) => {
                let { isAddedToCart, quantity, price } = curObject;

                if (isAddedToCart === true) {
                    acc.totalItem = acc.totalItem + quantity;

                    let totalPrice = price * quantity;
                    acc.totalAmount = acc.totalAmount + totalPrice;
                }

                return acc;
            },
            // intial Value
            {
                totalItem: 0,
                totalAmount: 0
            }
        );
        // So, Now Total Item vlaue is Updated...

        return {
            // destructure the intialState object into key-value pairs....
            ...state, totalItem, totalAmount
        }
    }

    return state;
}

