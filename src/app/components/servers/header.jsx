import Link from 'next/link'
import React from 'react'

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
            <Link href="/contact" className='hidden lg:inline'>
                Contact
            </Link>
        </div>
    )
}

export default Header