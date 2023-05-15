"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import ProductsCardAdmin from '../ProductsCardAdmin';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import ReadProductsMap from './ReadProductsMap';

export const revalidate = 0.1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ReadProductsDisplay = ({ isCart = false, isAdmin = false,
    userEmailFull
}) => {
    // ---------------------------------------------------------------

    const router = useRouter();

    const refreshPage = () => {
        router.refresh();
        router.refresh();

        //this will reload the page without doing SSR
        // console.log('refreshPage');
    }
    // ---------------------------------------------------------------

    const [total, setTotal] = useState();

    const { data, error, isLoading } = useSWR("/api/product/read", fetcher, { refreshInterval: 1 });

    if (error) {
        return (<> Error </>);
    }

    if (isLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!data) {
        return (<> data not found </>);
    }

    let readProducts = data.readptModels2;
    // let readUserCart = user?.userInfo?.cart;

    // console.log(`readUsers`);
    // console.log(readUserInfo?.cart);
    // console.log(readUserCart);



    if (isCart == false) {

        return (
            <>

                <ReadProductsMap readProducts={readProducts} isAdmin={isAdmin}>
                </ReadProductsMap>
            </>
        )

    }


    if (isCart == true) {

        let cartPtoducts = readProducts.filter(item => item.isAddedToCart == true);

        let totalPricePerProduct = 0;
        let totalAmount = cartPtoducts.reduce(
            (acc, currentItem) => {
                // console.log(currentItem.price);
                // console.log(currentItem.quantity);
                totalPricePerProduct = currentItem.price * currentItem.quantity;
                return acc + parseInt(totalPricePerProduct);
            }, 0
        );

        return (
            <>
                <ReadProductsMap readProducts={cartPtoducts} isAdmin={isAdmin}>
                </ReadProductsMap>

            </>
        )

    }
}

export default ReadProductsDisplay