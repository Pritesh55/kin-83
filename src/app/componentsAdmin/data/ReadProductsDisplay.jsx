"use client"
import React, { useState } from 'react'
import useSWR from 'swr';
import ProductsCardAdmin from '../ProductsCardAdmin';
{/* ---------------------------------- */ }
// 01 :: session
import { SessionProvider } from 'next-auth/react';
{/* ---------------------------------- */ }

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ReadProductsDisplay = ({ isCart = false, isAdmin = false,
    //  -----------------
    // 02 :: session
    // ------------------
    session
}) => {

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

    if (isCart == false) {
        return (
            <>

                {/* ---------------------------------- */}
                {/* // 03 :: session */}
                {/* ---------------------------------- */}
                <SessionProvider session={session}>
                    {
                        readProducts.map((curItem, index) => {
                            return (
                                <ProductsCardAdmin key={index} isAdmin={isAdmin}
                                    {...curItem}>
                                </ProductsCardAdmin>
                            )
                        })}
                </SessionProvider>
            </>
        )

    }


    if (isCart == true) {

        let catPtoducts = readProducts.filter(item => item.isAddedToCart == true);

        let totalPricePerProduct = 0;
        let totalAmount = catPtoducts.reduce(
            (acc, currentItem) => {
                // console.log(currentItem.price);
                // console.log(currentItem.quantity);
                totalPricePerProduct = currentItem.price * currentItem.quantity;
                return acc + parseInt(totalPricePerProduct);
            }, 0
        );

        return (
            <>

                {/* ---------------------------------- */}
                {/* // 03 :: session */}
                {/* ---------------------------------- */}
                <SessionProvider session={session}>
                    {
                        catPtoducts.map((curItem, index) => {
                            return (
                                <ProductsCardAdmin key={index} isAdmin={isAdmin}
                                    {...curItem}>
                                </ProductsCardAdmin>
                            )
                        })
                    }
                    {/* ---------------------------------- */}
                </SessionProvider>
                {/* ---------------------------------- */}


            </>
        )

    }


}

export default ReadProductsDisplay