"use client"
import React, { useEffect, useState } from 'react'
import useSWR from 'swr';
import ProductsCardAdmin from '../ProductsCardAdmin';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { useRouter } from 'next/navigation';

export const revalidate = 0.1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const ReadProductsDisplay = ({ isCart = false, isAdmin = false,

}) => {
    // ---------------------------------------------------------------

    const router = useRouter();

    const refreshPage = () => {
        router.refresh();
        router.refresh();
        //this will reload the page without doing SSR
        // console.log('refreshPage');
    }
    const { data: session } = useSession();

    // console.log("session", session);

    useEffect(() => {
        // console.log("session", session);

    }, [session]);

    // ---------------------------------------------------------------

    const [total, setTotal] = useState();

    const { data, error, isLoading } = useSWR("/api/product/read", fetcher, { refreshInterval: 1 });



    let userEmail = session?.user?.email;
    if (userEmail !== undefined) {
        userEmail = userEmail.substring(0, userEmail.length - 10);
    } else {
        userEmail = "guest";
    }

    // const { data: user } = useSWR(`/api/cuser/now/${userEmail}`, fetcher, { refreshInterval: 1 });

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

    const createUser = async () => {
        await axios.post('/api/cuser/add', {
            userName: session?.user?.name,
            userEmail: session?.user?.email
        }).then((response) => {

            if (response.data.a == null) {
                console.log(response.data);
            }

        }, (error) => {
            console.log(error);
        });
    }



    if (isCart == false) {

        createUser();
        return (
            <>
                <div className='hidden'>{session?.user?.email}</div>

                {
                    readProducts.map((curItem, index) => {
                        return (
                            <ProductsCardAdmin key={index} isAdmin={isAdmin} userEmail={session?.user?.email}
                                {...curItem}>
                            </ProductsCardAdmin>
                        )
                    })
                }


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


                <div>{session?.user?.email}</div>




                {

                    catPtoducts.map((curItem, index) => {
                        return (
                            <ProductsCardAdmin key={index} isAdmin={isAdmin} userEmail={session?.user?.email}
                                {...curItem}>
                            </ProductsCardAdmin>
                        )
                    })
                }







            </>
        )

    }
}

export default ReadProductsDisplay