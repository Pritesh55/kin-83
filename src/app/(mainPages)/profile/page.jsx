import ProfileData from '@/app/components/cliants/user/profile/ProfileData'
import React from 'react'

export const metadata = {
    title: 'Profile page',
    description: 'Generated by create next app',
}

const profile = () => {
    return (
        <>

            <div className="px-5 flex flex-col gap-y-3">
                <ProfileData></ProfileData>
            </div>

        </>
    )
}

export default profile