import Link from 'next/link'
import React from 'react'
import Sign from '../cliants/user/Sign';
import CallSign from '../cliants/user/CallSign';


export const revalidate = 1;

const Header = () => {

    return (

        <div className='text-xl font-semibold flex justify-between w-full '>

            <Link href="/">
                Home
            </Link>
            <Link href="/admin">
                Admin
            </Link>

            <Link href="/products" className='hidden lg:inline'>
                Products
            </Link>

            <CallSign></CallSign>



 


        </div>
    )
}

export default Header