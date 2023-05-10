"use client"
import React, { useEffect } from 'react'
import ProductsCardAdmin from '../ProductsCardAdmin';
import useSWR from 'swr';
import ReadProductsMap from './ReadProductsMap';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SortProductsDisplay = ({ isCart = false, isAdmin }) => {


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



    if (isCart == false) {
        return (
            <>

                <ReadProductsMap readProducts={sortedProducts} isAdmin={isAdmin}>
                </ReadProductsMap>
            </>
        )

    }


    if (isCart == true) {
        return (
            <>

                <ReadProductsMap readProducts={catPtoducts} isAdmin={isAdmin}>
                </ReadProductsMap>

            </>
        )

    }


}

export default SortProductsDisplay