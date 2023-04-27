"use client"
import React from 'react'
import ProductsCardAdmin from '../ProductsCardAdmin';
import useSWR from 'swr';

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const SortProductsDisplay = () => {

    const { data, error, isLoading } = useSWR("/api/product/sort", fetcher, { refreshInterval: 1000 });

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

    return (
        <>
            {sortedProducts.map((curItem, index) => {
                return (
                    <>
                        <ProductsCardAdmin key={index}
                            {...curItem}>
                        </ProductsCardAdmin>
                    </>
                )
            })}
        </>
    )
}

export default SortProductsDisplay