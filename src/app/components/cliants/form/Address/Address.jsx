"use client"
import React from 'react'
import { useRef, useState } from "react";
import useAutosizeTextArea from "./useAutosizeTextArea";


const Address = () => {

    const [value, setValue] = useState("");
    const textAreaRef = useRef(null);

    useAutosizeTextArea(textAreaRef.current, value);

    const handleChange = (evt) => {
        const val = evt.target?.value;

        setValue(val);
    };


    return (

        <>

            <div className="flex flex-col w-full gap-y-2">
                <label htmlFor="review-text">
                    <span className="text-gray-700 text-xl font-semibold">
                    Your Address
                    </span>
                    
                </label>

                <textarea
                    id="review-text"
                    onChange={handleChange}
                    placeholder="Type Your House Number, Appartment name, Area Name..."
                    ref={textAreaRef}
                    rows={1}
                    value={value}
                    className='mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50
                min-w-full min-h-[124px]'
                />

            </div>




        </>



    )
}

export default Address