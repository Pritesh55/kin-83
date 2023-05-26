
"use client"
import React, { useRef, useState } from 'react'
import useAutosizeTextArea from '../Address/useAutosizeTextArea';

const ProfileUpdateForm = () => {


    const [isEdit, setIsEdit] = useState(true);

    const [valueAddress, setValueAddress] = useState("");
    const [cityNameInput, setCityNameInput] = useState("");
    const [stateNameInput, setStateNameInput] = useState("");
    const [pincodeInput, setPincodeInput] = useState();
    const [mobileNoInput, setMobileNoInput] = useState();
    const [emailIdInput, setEmailIdInput] = useState("");


    // -----------------------------------------------------------------
    const textAreaRef = useRef(null);
    useAutosizeTextArea(textAreaRef.current, valueAddress);
    // --------------------------------------------------------------

    const goToPayment = () => {
        console.log(valueAddress, "valueAddress");
        console.log(cityNameInput, "cityNameInput");
        console.log(stateNameInput, "stateNameInput");
        console.log(pincodeInput, "pincodeInput");
        console.log(mobileNoInput, "mobileNoInput");
        console.log(emailIdInput, "emailIdInput");
    }

    return (
        <>

            <div className="">

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

                </div>


            </div>
        </>
    )
}

export default ProfileUpdateForm