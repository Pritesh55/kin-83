
"use client"
import React, { useEffect, useRef, useState } from 'react'
import useAutosizeTextArea from '../Address/useAutosizeTextArea';
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

//  ----------------------------------------------
//  03 :: fetcher :: 
import useSWR from 'swr';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
// -----------------------------------------------

//  ----------------------------------------------
//  01 :: fetcher :: 
const fetcher = (...args) => fetch(...args).then((res) => res.json());
// -----------------------------------------------------------------------

const ProfileUpdateForm = () => {

    const router = useRouter();
    // console.log(uuidv4());

    //  ----------------------------------------------
    //  02 :: fetcher :: 
    const { data: userNowData, error: userNowError, isLoading: userNowIsLoading } = useSWR(`/api/auth/session`, fetcher, { refreshInterval: 0.1 });
    //  ----------------------------------------------


    //  ----------------------------------------------
    //  04 :: fetcher :: 
    let userEmailFull = userNowData?.user?.email;
    let userName = userNowData?.user?.name;

    if (userEmailFull == undefined) {
        userName = `guest${uuidv4()}`;
        userEmailFull = `${userName}@gmail.com`;
    }
    //  ----------------------------------------------


    //  ----------------------------------------------
    //  02 :: fetcher :: 
    const { data: userProfileInfo, error: userProfileInfoError, isLoading: userProfileInfoIsLoading } = useSWR(`/api/cuser/now/${userEmailFull}`, fetcher, { refreshInterval: 0.1 });

    let userInfo;
    if (userProfileInfo) {
        userInfo = userProfileInfo?.userInfo;
    }

    //  ----------------------------------------------

    // profile data :: Define state Variables ::
    const [isProfileInfoOutputEmpty, setIsProfileInfoOutputEmpty] = useState(false);

    const [userNameOutput, setUserNameOutput] = useState(``);
    const [emailIdOutput, setEmailIdOutput] = useState(``);
    const [valueAddressOutput, setValueAddressOutput] = useState(``);
    const [cityNameOutput, setCityNameOutput] = useState(``);
    const [stateNameOutput, setStateNameOutput] = useState(``);
    const [pincodeOutput, setPincodeOutput] = useState(0);
    const [mobileNoOutput, setMobileNoOutput] = useState(0);
    const [co, setco] = useState(0);


    // Input shipping detail :: Define Shipping Variables ::
    const [valueAddress, setValueAddress] = useState("");
    const [cityNameInput, setCityNameInput] = useState("");
    const [stateNameInput, setStateNameInput] = useState("");
    const [pincodeInput, setPincodeInput] = useState();
    const [mobileNoInput, setMobileNoInput] = useState();
    const [emailIdInput, setEmailIdInput] = useState("");


    // For address automatically Size increase ::
    // -----------------------------------------------------------------
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef.current, valueAddress);
    // --------------------------------------------------------------

    useEffect(() => {

        let userName;
        let emailId;
        let mobileNo;
        let address;
        let cityName;
        let stateName;
        let pincode;


        if (userInfo?.profileInfo?.length == 0) {

            setIsProfileInfoOutputEmpty(true);

            userName = ''
            emailId = ''
            mobileNo = 0
            address = ''
            cityName = ''
            stateName = ''
            pincode = 0

            // intial variable Values ::
            // console.log("\n");
            // console.log(`---------------------------`);
            // console.log("THis is userInfo...");
            // console.log(userInfo);
            // console.log(`---------------------------`);
            // console.log(userInfo?.profileInfo, `\n userInfo?.profileInfo`);

            // console.log(userName, "userName");
            // console.log(emailId, "emailId");
            // console.log(mobileNo, "mobileNo");

            // console.log(address, "address");
            // console.log(cityName, "cityName");
            // console.log(stateName, "stateName");
            // console.log(pincode, "pincode");
        } else {
            setIsProfileInfoOutputEmpty(false);
        }


        if (userInfo?.profileInfo != undefined && userInfo?.profileInfo?.length > 0) {

            userName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.userName;
            emailId = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.emailId;
            mobileNo = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.mobileNo;

            address = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.address;
            cityName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.cityName;
            stateName = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.stateName;
            pincode = userInfo?.profileInfo[userInfo?.profileInfo.length - 1]?.pincode;

            if (cityName != undefined) {

                // console.log(`userName`);
                setUserNameOutput(userName);
                setEmailIdOutput(emailId);
                setMobileNoOutput(mobileNo);

                setValueAddressOutput(address);
                setCityNameOutput(cityName);
                setStateNameOutput(stateName);
                setPincodeOutput(pincode);

                setco(1);

            }

        }




    }, [userInfo]);

    if (co == 1) {
        console.log(`userNameOutput`);

        console.log(userNameOutput);
        console.log(emailIdOutput);
        console.log(valueAddressOutput);
        console.log(cityNameOutput);
        console.log(stateNameOutput);
        console.log(pincodeOutput);
        console.log(mobileNoOutput);

        if (cityNameOutput !== '') {
            setEmailIdInput(emailIdOutput);
            setMobileNoInput(mobileNoOutput);

            setValueAddress(valueAddressOutput);
            setCityNameInput(cityNameOutput);
            setStateNameInput(stateNameOutput);
            setPincodeInput(pincodeOutput);
        }

        setco(0);

    }


    const [ispaymentPage, setIsPaymentPage] = useState(false);
    const goToPayment = async () => {

        setIsPaymentPage(true);

        if (isProfileInfoOutputEmpty == true) {
            await axios.put(`/api/cuser/profile`, {
                userName: `${userName}`,
                userEmail: `${userEmailFull}`,
                valueAddress: valueAddress,
                cityNameInput: cityNameInput,
                stateNameInput: stateNameInput,
                pincodeInput: pincodeInput,
                mobileNoInput: mobileNoInput,
                emailIdInput: emailIdInput,

                // -------------------------------
                // Here iis the effect...
                upProfile: true,
                // -------------------------------
                upShipping: true,

            }).then((response) => {
                console.log(response.data);
            });
        } else {

            await axios.put(`/api/cuser/profile`, {
                userName: `${userName}`,
                userEmail: `${userEmailFull}`,
                valueAddress: valueAddress,
                cityNameInput: cityNameInput,
                stateNameInput: stateNameInput,
                pincodeInput: pincodeInput,
                mobileNoInput: mobileNoInput,
                emailIdInput: emailIdInput,

                // -------------------------------
                // Here iis the effect...
                upProfile: false,
                // -------------------------------
                upShipping: true,

            }).then((response) => {
                console.log(response.data);
            });
        }



    }






    return (
        <>

            {(ispaymentPage == false) &&

                <>
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
                                value={valueAddress}
                                onChange={(event) => {
                                    setValueAddress(event.target.value);
                                }}
                                className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 min-w-full min-h-[124px]'
                            />

                        </div>

                        <div className="flex gap-10 flex-wrap justify-start">

                            <label className="w-auto">

                                <span className="text-gray-700 text-lg"> City Name </span>

                                <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={cityNameInput}
                                    onChange={(event) => {
                                        let evalue = event.target.value.replace(/[^a-z]/gi, '');
                                        setCityNameInput(evalue);
                                    }}
                                />
                            </label>

                            <label className="">

                                <span className="text-gray-700 text-lg"> State Name </span>

                                <input type="text" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={stateNameInput}
                                    onChange={(event) => {
                                        let evalue = event.target.value.replace(/[^a-z]/gi, '');
                                        setStateNameInput(evalue);
                                    }} />
                            </label>

                            <label className="">

                                <span className="text-gray-700 text-lg"> Pin code </span>

                                <input type="number" className=" mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 " placeholder="" value={pincodeInput}
                                    onChange={(event) => {
                                        setPincodeInput(event.target.value);

                                    }} />
                            </label>


                            <div className="flex gap-10 flex-wrap">
                                <label className="">
                                    <span className="text-gray-700 text-lg"> Mobile no </span>

                                    <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" placeholder="(10 digit)" value={mobileNoInput}
                                        onChange={(event) => {
                                            setMobileNoInput(event.target.value);

                                        }} />
                                </label>

                                <label className="">
                                    <span className="text-gray-700 text-lg"> Email id </span>

                                    <input type="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                                        placeholder="abc@gmail.com" value={emailIdInput}
                                        onChange={(event) => {
                                            setEmailIdInput(event.target.value);
                                        }} />
                                </label>
                            </div>

                        </div>

                        <button onClick={() => { goToPayment(); }} className="px-8 py-2 bg-yellow-300 text-black font-medium text-lg rounded-lg">
                            Continue to Payment
                        </button>


                        <a href={`/api/cuser/now/${userEmailFull}`} target='_blank' className="px-8 py-2 bg-yellow-300 text-black font-medium text-lg rounded-lg">
                            Go to Info of user
                        </a>

                    </div>

                </>}

        </>
    )
}

export default ProfileUpdateForm