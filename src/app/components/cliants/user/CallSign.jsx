"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import Sign from './Sign';


const CallSign = ({session, loc}) => {

    return (
        <>
            <SessionProvider session={session}>
                <Sign loc={loc}></Sign>
            </SessionProvider>


        </>
    )
}

export default CallSign