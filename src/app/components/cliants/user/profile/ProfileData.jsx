"use client"
import React, { useEffect, useState } from 'react'

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

    let userInfo;
    if (userProfileInfo) {
        userInfo = userProfileInfo?.userInfo;
    }


    // -------------------------------------------------------
    userName;
    userEmailFull;

    // let mobileNo;
    // let address;
    // let cityName;
    // let stateName;
    // let pincode;


    // if (userInfo != undefined) {
    //     mobileNo = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.mobileNo;
    //     address = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.address;
    //     cityName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.cityName;
    //     stateName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.stateName;
    //     pincode = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.pincode;
    // }



    // console.log(userInfo?.profileInfo.length);



    const [countInput, setCountInput] = useState(0);


    const [userNameInput, setUserNameInput] = useState(``);
    const [emailIdInput, setEmailIdInput] = useState(``);
    const [valueAddress, setValueAddress] = useState(``);
    const [cityNameInput, setCityNameInput] = useState(``);
    const [stateNameInput, setStateNameInput] = useState(``);
    const [pincodeInput, setPincodeInput] = useState(0);
    const [mobileNoInput, setMobileNoInput] = useState(0);

    // if (userEmailFull != "guest@gmail.com" && countInput == 0) {
    //     setUserNameInput(userName);
    //     setEmailIdInput(emailIdInput);
    //     setValueAddress(valueAddress);
    //     setCityNameInput(cityNameInput);
    //     setStateNameInput(stateNameInput);
    //     setPincodeInput(pincodeInput);
    //     setMobileNoInput(mobileNoInput);
    //     setCountInput(1);
    // }



    useEffect(() => {

        let userName;
        let emailId;
        let mobileNo;
        let address;
        let cityName;
        let stateName;
        let pincode;

        if (userInfo?.profileInfo == {}) {

            userName = ''
            emailId = ''
            mobileNo = 0
            address = ''
            cityName = ''
            stateName = ''
            pincode = 0




        }

        if (userInfo?.profileInfo !== undefined && userInfo?.profileInfo !== {}) {
            userName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.userName;
            emailId = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.emailId;
            mobileNo = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.mobileNo;
            address = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.address;
            cityName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.cityName;
            stateName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.stateName;
            pincode = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.pincode;


            if (emailId != undefined) {
                setUserNameInput(userName);
                setEmailIdInput(emailId);
                setValueAddress(address);
                setCityNameInput(cityName);
                setStateNameInput(stateName);
                setPincodeInput(pincode);
                setMobileNoInput(mobileNo);
            }

        }

    }, [userInfo]);

    const goToPayment = async () => {

        await axios.put(`/api/cuser/profile`, {
            userName: `${userName}`,
            userEmail: `${userEmailFull}`,
            valueAddress: valueAddress,
            cityNameInput: cityNameInput,
            stateNameInput: stateNameInput,
            pincodeInput: pincodeInput,
            mobileNoInput: mobileNoInput,
            emailIdInput: emailIdInput,

            upProfile: true,
            upShipping: false,

        }).then((response) => {
            console.log(response.data);
        });

    }



    //  ----------------------------------------------
    return (
        <>


            <div className="flex gap-10 flex-wrap">

                <div className="flex justify-between gap-10 flex-wrap pr-10 w-full ">
                    <span className="font-bold underline underline-offset-8"> Edit Your Profile </span>

                    <button onClick={() => { goToPayment(); }} className="px-8 py-2 bg-yellow-300 text-black font-medium text-lg rounded-lg">
                        Save and Update
                    </button>
                </div>


                <div className="flex gap-10 flex-wrap justify-start">

                    <label className="w-max">
                        <span className="text-gray-700 text-lg"> User Name </span>

                        <input type="text" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="abc@gmail.com" value={userNameInput}
                            onChange={(event) => {
                                setUserNameInput(event.target.value);
                            }} />
                    </label>

                    <label className="w-max">
                        <span className="text-gray-700 text-lg"> Email id </span>

                        <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            placeholder="abc@gmail.com" value={emailIdInput}
                            onChange={(event) => {
                                setEmailIdInput(event.target.value);
                            }} />
                    </label>

                    <label className="w-auto">

                        <span className="text-gray-700 text-lg"> City Name </span>

                        <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={cityNameInput}
                            onChange={(event) => {
                                let evalue = event.target.value.replace(/[^a-z]/gi, '');
                                setCityNameInput(evalue);
                            }}
                        />
                    </label>

                    <label className="w-max">

                        <span className="text-gray-700 text-lg"> State Name </span>

                        <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={stateNameInput}
                            onChange={(event) => {
                                let evalue = event.target.value.replace(/[^a-z]/gi, '');
                                setStateNameInput(evalue);
                            }} />
                    </label>

                    <label className="w-max">

                        <span className="text-gray-700 text-lg"> Pin code </span>

                        <input type="number" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={pincodeInput}
                            onChange={(event) => {
                                setPincodeInput(event.target.value);
                            }} />
                    </label>



                    <label className="w-max">
                        <span className="text-gray-700 text-lg"> Mobile no </span>

                        <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="(10 digit)" value={mobileNoInput}
                            onChange={(event) => {
                                setMobileNoInput(event.target.value);

                            }} />
                    </label>


                    <div className="flex flex-col w-full gap-y-2 pb-5">
                        <label htmlFor="review-address">
                            <span className="text-gray-700 text-lg">
                                Full Address
                            </span>

                        </label>

                        <textarea
                            id="review-address"

                            placeholder="Type Your House Number, Appartment name, Area Name..."
                            rows={1}
                            value={valueAddress}
                            onChange={(event) => {
                                setValueAddress(event.target.value);
                            }}
                            className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-w-full min-h-[124px]'
                        />

                    </div>

                </div>

                <div className="-mt-5 mb-10 flex gap-x-10 flex-wrap">
                    <button onClick={() => { goToPayment(); }} className="px-8 py-2 bg-yellow-300 text-black font-medium text-lg rounded-lg">
                        Save and Update
                    </button>

                    <a href={`/api/cuser/now/${userEmailFull}`} target='_blank' className="px-8 py-2 bg-yellow-300 text-black font-medium text-lg rounded-lg">
                        Go to Info of user
                    </a>
                </div>




            </div>
        </>


    )
}

export default ProfileData