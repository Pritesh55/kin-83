"use client"
import Link from 'next/link';
import React from 'react'
// ---------------------------------------------------------------
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";
// ---------------------------
import axios from 'axios';
// ---------------------------------------------------------------

const Sign = ({ loc }) => {
    // ---------------------------------------------------------------
    const { data: session } = useSession();

    // console.log("session", session);

    useEffect(() => {
        // console.log("session", session);
    }, [session]);
    // ---------------------------------------------------------------

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

  


    // if (session && session != {} && session?.user) {
    if (session?.user?.name) {
        createUser();
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