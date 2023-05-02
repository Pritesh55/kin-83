"use client"
import Link from 'next/link';
import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect } from "react";

const Sign = ({ loc }) => {

    const { data: session } = useSession();

    console.log("session", session);

    useEffect(() => {
        console.log("session", session);
    }, [session]);

    // if (session && session != {} && session?.user) {
    if (loc == 3) {
        return (
            <>
                <Link href="/api/auth/signout" className='inline'>
                    <button onClick={() => {
                        signOut();
                    }}>
                        log Out
                        {/* {session?.user?.name} {loc} */}
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