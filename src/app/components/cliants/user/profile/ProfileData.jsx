"use client"
import React, { useState } from 'react'

//  ----------------------------------------------
//  03 :: fetcher :: 
import useSWR from 'swr';
import axios from 'axios';
import { useRouter } from 'next/navigation';
// -----------------------------------------------
import { v4 as uuidv4 } from 'uuid';
//  ----------------------------------------------
//  01 :: fetcher :: 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// -----------------------------------------------------------------------

const ProfileData = () => {

    //  ----------------------------------------------
    //  02 :: fetcher :: 
    const { data: userNowData, error: userNowError, isLoading: userNowIsLoading } = useSWR(`/api/auth/session`, fetcher, { refreshInterval: 0.1 });

    //  ----------------------------------------------
    //  04 :: fetcher :: 
    let userEmailFull = userNowData?.user?.email;
    let userName = userNowData?.user?.name;

    if (userEmailFull == undefined) {
        userName = `guest`;
        userEmailFull = `guest@gmail.com`;
    }
    //  ----------------------------------------------

    //  ----------------------------------------------

    //  02.02 :: fetcher :: 
    const { data: userProfileInfo, error: userProfileInfoError, isLoading: userProfileInfoIsLoading } = useSWR(`/api/cuser/now/${userEmailFull}`, fetcher, { refreshInterval: 0.1 });

    userName;
    userEmailFull;

    let mobileNo;
    let address;
    let cityName;
    let pincode;

    mobileNo = userProfileInfo?.userInfo?.profileInfo[0]?.mobileNo;
    address = userProfileInfo?.userInfo?.profileInfo[0]?.address;
    cityName = userProfileInfo?.userInfo?.profileInfo[0]?.cityName;
    stateName = userProfileInfo?.userInfo?.profileInfo[0]?.stateName;
    pincode = userProfileInfo?.userInfo?.profileInfo[0]?.pincode;

    console.log(userProfileInfo?.userInfo?.profileInfo[0])


    //  ----------------------------------------------
    return (
        <>

            <div className=""> {userName} </div>
            <div className=""> {userEmailFull} </div>
            <div className=""> {mobileNo} </div>
            <div className=""> {address} </div>
            <div className=""> {cityName} </div>
            <div className=""> {pincode} </div>



            <label className="">
                <span className="text-gray-700 text-lg"> User Name </span>

                <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="abc@gmail.com" value={userName}
                    onChange={(event) => {

                    }} />
            </label>


            <label className="">
                <span className="text-gray-700 text-lg"> Email id </span>

                <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    placeholder="abc@gmail.com" value={userEmailFull}
                    onChange={(event) => {

                    }} />
            </label>

            <div className="flex gap-10 flex-wrap">

                <div className="flex flex-col w-full gap-y-2">
                    <label htmlFor="review-address">
                        <span className="text-gray-700 text-xl font-semibold">
                            Your Address
                        </span>

                    </label>

                    <textarea
                        id="review-address"

                        placeholder="Type Your House Number, Appartment name, Area Name..."
                        ref={textAreaRef}
                        rows={1}
                        value={address}
                        onChange={(event) => {

                        }}
                        className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-w-full min-h-[124px]'
                    />

                </div>

                <div className="flex gap-10 flex-wrap justify-start">

                    <label className="w-auto">

                        <span className="text-gray-700 text-lg"> City Name </span>

                        <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={cityName}
                            onChange={(event) => {

                            }}
                        />
                    </label>

                    <label className="">

                        <span className="text-gray-700 text-lg"> State Name </span>

                        <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={stateName}
                            onChange={(event) => {

                            }} />
                    </label>

                    <label className="">

                        <span className="text-gray-700 text-lg"> Pin code </span>

                        <input type="number" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={pincode}
                            onChange={(event) => {


                            }} />
                    </label>


                    <div className="flex gap-10 flex-wrap">
                        <label className="">
                            <span className="text-gray-700 text-lg"> Mobile no </span>

                            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="(10 digit)" value={mobileNo}
                                onChange={(event) => {


                                }} />
                        </label>


                    </div>

                </div>



            </div>
        </>


    )
}

export default ProfileData