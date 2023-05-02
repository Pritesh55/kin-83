"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react';
import Sign from './Sign';

const CallSign = (session) => {

    return (
        <>
            <SessionProvider session={session}>
                <Sign></Sign>
            </SessionProvider>
        </>
    )
}

export default CallSign