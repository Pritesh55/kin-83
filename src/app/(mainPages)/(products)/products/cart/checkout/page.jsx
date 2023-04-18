import AddToCartHeaderCall from '@/app/components/cliants/AddToCartHeaderCall'
import React from 'react'

const checkout = async () => {

    return (
        <>
            <div className="flex flex-col gap-x-5 gap-y-5 justify-evenly flex-wrap">

                <div className="flex flex-col gap-y-10">
                    <AddToCartHeaderCall></AddToCartHeaderCall>
                </div>

                <div className='m-auto w-max h-80 flex justify-center items-center text-4xl'>This is checkout Page...</div>
            </div>

        </>

    )
}

export default checkout