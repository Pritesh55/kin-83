import React from 'react'
import useSWR from 'swr';
import ProductsCardAdmin from '../ProductsCardAdmin';

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ReadProductsDisplay = () => {

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

    return (
        <>

            {readProducts.map((curItem, index) => {
                return (


                    <ProductsCardAdmin key={index}
                        {...curItem}>
                    </ProductsCardAdmin>

                )
            })}
        </>
    )
}

export default ReadProductsDisplay