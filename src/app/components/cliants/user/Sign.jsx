"use client"
import Link from 'next/link';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";


const Sign = (type = 'in') => {

    const { data: session } = useSession();

    console.log("session", session);

    useEffect(() => {
        if (session?.error === "RefreshAccessTokenError") {
            signIn(); // Force sign in to hopefully resolve error
        }
    }, [session]);

    if (session && session != {} && session?.user) {
        return (
            <>

                <Link href="/api/auth/signout" className='lg:inline'>
                    <button onClick={() => {

                        signOut();

                    }}>
                        log Out {session?.user?.email}
                    </button>
                </Link>
            </>
        )
    } else

        return (
            <>


                <Link href="/api/auth/signin" className='lg:inline'>
                    <button onClick={() => {

                        signIn();

                    }}>
                        log in
                    </button>
                </Link>




            </>
        )
}

export default Sign