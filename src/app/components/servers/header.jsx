import Link from 'next/link'
import React from 'react'
import Sign from '../cliants/user/Sign';
import CallSign from '../cliants/user/CallSign';

import { cookies } from 'next/headers';
export const revalidate = 0.1;

const Header = () => {
    const cookieStore = cookies();

    const arrOfCookies = cookieStore.getAll();
    return (

        <>
            <div className='text-xl font-semibold flex justify-between w-full flex-wrap gap-10'>

                <Link href="/">
                    Home
                </Link>
                <Link href="/admin">
                    Admin
                </Link>

                <Link href="/profile">
                    profile
                </Link>

                <CallSign loc={arrOfCookies.length}></CallSign>


            </div>



            {/* add flex to display */}
            <div className="max-w-full my-20 text-justify  flex-col gap-y-10 hidden">
                {
                    arrOfCookies.map((cookie) => (
                        <div key={cookie.name} className='flex flex-col justify-start break-all'>
                            <p>Name: {cookie.name}</p>
                            <p className=' break-all'> {`Value: ${cookie.value}`}</p>
                        </div>
                    ))
                }
            </div>
        </>




    )
}

export default Header