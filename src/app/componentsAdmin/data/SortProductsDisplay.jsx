"use client"
import React, { useEffect } from 'react'
import ProductsCardAdmin from '../ProductsCardAdmin';
import useSWR from 'swr';
import { useSession } from 'next-auth/react';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SortProductsDisplay = ({ isCart = false }) => {

    // ---------------------------------------------------------------
    const { data: session } = useSession();

    // console.log("session", session);

    useEffect(() => {
        // console.log("session", session);
    }, [session]);

    // ---------------------------------------------------------------

    const { data, error, isLoading } = useSWR("/api/product/sort", fetcher, { refreshInterval: 1 });

    if (error) {
        return (<> Error </>);
    }

    if (isLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!data) {
        return (<> data not found </>);
    }

    let sortedProducts = data.readptModels2.sort((a, b) => { return a.id - b.id; });
    let catPtoducts = sortedProducts.filter(item => item.isAddedToCart == true);


    console.log(session?.user?.email);

    if (isCart == false) {
        return (
            <>
                <div className='hidden'>{session?.user?.email}</div>
                {sortedProducts.map((curItem, index) => {
                    return (
                        <>
                            <ProductsCardAdmin key={index} userEmail={session?.user?.email}
                                {...curItem}>
                            </ProductsCardAdmin>
                        </>
                    )
                })}
            </>
        )

    }


    if (isCart == true) {
        return (
            <>
                <div>{session?.user?.email}</div>

                {
                    catPtoducts.map((curItem, index) => {
                        return (
                            <ProductsCardAdmin key={index} userEmail={session?.user?.email}
                                {...curItem}>
                            </ProductsCardAdmin>
                        )
                    })}

            </>
        )

    }


}

export default SortProductsDisplay