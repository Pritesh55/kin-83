"use client"
import Link from 'next/link';
import React, { useState } from 'react'
// ---------------------------------------------------------------
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
// ---------------------------
import axios from 'axios';
// ---------------------------------------------------------------

const Sign = ({ loc }) => {
    // ---------------------------------------------------------------
    const { data: session } = useSession();

    const [isAdded1, setIsAdded1] = useState(0)

    // console.log("session", session);

    useEffect(() => {
        // console.log("session", session);
    }, [session]);
    // ---------------------------------------------------------------

    const createUser = async () => {

        let userName = session?.user?.name;
        let userEmail = session?.user?.email;

        await axios.post('/api/cuser/add', {
            userName: userName,
            userEmail: userEmail
        }).then((response) => {

            if (response.data.a == null) {
                console.log(response.data);
                setIsAdded1(1);
            }

        }, (error) => {
            console.log(error);
        });

        userEmail = userEmail.substring(0, userEmail.length - 10);

        // await axios.get(`/api/cuser/now/${userEmail}`).then((response) => {
        //     console.log(response.data);
        // }, (error) => {
        //     console.log(error);
        // });
    }




    // if (session && session != {} && session?.user) {
    if (session?.user?.name) {

        if (isAdded1 == 0) {
            createUser();
        }

        return (
            <>
                <Link href="/api/auth/signout" className='inline'>
                    <button onClick={() => {
                        signOut();
                    }} className='flex flex-col items-end'>
                        <span className="">log Out</span>
                        <span className="">{session?.user?.name}</span>
                        <span className="">{session?.user?.email}</span>
                        {/*  {loc} */}
                    </button>
                </Link>
            </>
        )
    } else

        return (
            <>
                <Link href="/api/auth/signin" className='inline'>
                    <button onClick={() => {
                        signIn();
                    }}>
                        log in
                        {/* {session?.user?.name}{loc} */}
                    </button>
                </Link>
            </>
        )
}

export default Sign