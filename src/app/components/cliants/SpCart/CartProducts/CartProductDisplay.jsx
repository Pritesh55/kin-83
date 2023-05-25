
import React from 'react'

//  ----------------------------------------------
//  03 :: fetcher :: 
import useSWR from 'swr';
import ProductsCardAdmin from '@/app/componentsAdmin/ProductsCardAdmin';
import Link from 'next/link';
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

    // -----------------------------------------------
    let cartProducts = [{}];
    let totalItem = 0;
    let totalAmount = 0;

    if (userNowData) {
        cartProducts = userNowData?.userInfo?.cart;
        totalItem = userNowData?.totalItem;
        totalAmount = userNowData?.totalAmount;
    }


    // -----------------------------------------------------------------------------------

    return (
        <>

            {/* 04 :: fetcher */}
            {/* <div>CartProductDisplay :: राम राम  , {userName} :: {userEmail}</div> */}
            {/* ----------- */}

            <div className="flex gap-x-10 justify-between">
                <Link href='/' className="inline-flex px-8 py-2 bg-gray-200 text-purple-900 font-medium rounded-md text-lg w-max">
                    Continue To Shopping
                </Link>

                <Link href="/cart/checkout" className="px-8 py-2 bg-yellow-300 text-black font-medium  text-lg border-2 border-red-500 rounded-e-full">

                    <span className="">
                        Place Order
                    </span>

                </Link>

                <div className="flex gap-x-20 justify-center items-center sm:justify-between flex-wrap gap-y-5 px-10 py-2 bg-yellow-300 rounded-t-full ">

                    <div className="">
                        <span className="text-2xl">
                            {`${totalItem} Items`}
                            {/* {`0 Items`} */}
                        </span>
                    </div>




                    <div className="">
                        <span className="text-xl">
                            {`Total : `}
                        </span>
                        <span className="text-2xl">
                            {`${totalAmount} ₹`}
                            {/* {`0 ₹`} */}
                        </span>
                    </div>


                </div>
            </div>



            <div className="flex flex-wrap gap-10">
                {
                    (userNowData?.userInfo?.cart) &&
                    <>
                        {

                            userNowData?.userInfo?.cart.map((curItem, index) => {
                                return (
                                    <ProductsCardAdmin key={index} isCart={true} isAdmin={false} userEmail={`${userEmail}@gmail.com`}
                                        {...curItem}>
                                    </ProductsCardAdmin>
                                )
                            })
                        }
                    </>


                }

            </div>



        </>

    )
}

export default CartProductDisplay