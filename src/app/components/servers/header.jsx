import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        
        <div className='text-xl font-semibold flex justify-between w-full '>

            <Link href="/">
                Home
            </Link>
            <Link href="/about">
                About
            </Link>

            <Link href="/products">
                Products
            </Link>
            <Link href="/contact">
                Contact
            </Link>
        </div>
    )
}

export default Header