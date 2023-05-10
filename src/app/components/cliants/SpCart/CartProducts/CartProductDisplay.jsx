
import React from 'react'

//  ----------------------------------------------
//  03 :: fetcher :: 
import useSWR from 'swr';
import ProductsCardAdmin from '@/app/componentsAdmin/ProductsCardAdmin';
// -----------------------------------------------

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

//  ----------------------------------------------
//  01 :: fetcher :: 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// -----------------------------------------------------------------------

const CartProductDisplay = () => {

    const { data: userInfo, error: userInfoError, isLoading: userInfoIsLoading } = useSWR(`/api/auth/session`, fetcher, { refreshInterval: 1 });

    let userEmail = userInfo?.user?.email;
    let userName = userInfo?.user?.name;
  
    //  ----------------------------------------------
    //  02 :: fetcher :: 
    const { data: userNowData, error: userNowError, isLoading: userNowIsLoading } = useSWR(`/api/cuser/now/${userEmail}`, fetcher, { refreshInterval: 1 });

    if (userNowError) {
        return (<> Error </>);
    }

    if (userNowIsLoading) {
        return (<> wait , Data is on the Way.... </>);
    }

    if (!userNowData) {
        return (<> data not found </>);
    }

    // -----------------------------------------------

    return (
        <>

            {/* 04 :: fetcher */}
            <div>CartProductDisplay :: राम राम  , {userName} :: {userEmail}</div>
            {/* ----------- */}


         

            {
                (userNowData?.userInfo?.cart) &&
                <>
                    {

                        userNowData?.userInfo?.cart.map((curItem, index) => {
                            return (
                                <ProductsCardAdmin key={index} isAdmin={false} userEmail={`${userEmail}@gmail.com`}
                                    {...curItem}>
                                </ProductsCardAdmin>
                            )
                        })
                    }
                </>


            }

        </>

    )
}

export default CartProductDisplay