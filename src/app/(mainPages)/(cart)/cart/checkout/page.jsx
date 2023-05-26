import AddToCartHeaderCall from '@/app/components/cliants/AddToCartHeaderCall'
import Address from '@/app/components/cliants/form/Address/Address'
import ProfileUpdateForm from '@/app/components/cliants/form/Profile/ProfileUpdateForm'
import React from 'react'

const checkout = async () => {

    return (
        <>

            <main className="px-5">
                <div className="flex flex-col gap-x-5 gap-y-5 justify-evenly flex-wrap">

                    <div className="flex flex-col gap-y-10">

                        <ProfileUpdateForm></ProfileUpdateForm>
                       

                    </div>

                    <div className='m-auto w-max h-80 flex justify-center items-center text-4xl'>This is checkout Page...</div>
                </div>

            </main>


        </>

    )
}

export default checkout