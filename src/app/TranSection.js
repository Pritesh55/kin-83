"use client"
import React, { useState } from 'react'
import TransactionRow from './TransactionRow';

const TranSection = () => {
    const refundArray = [
        {
            objectNo: 1,
            orderNo: `029283736251145252201`,
            transactionId: "29292982171293701",
            transactionDate: '01 dec 2022',
            refundStatus: 'Refund success',
            refundID: 2827262525101,
            amount: '399.00'
        },
        {
            objectNo: 2,
            orderNo: `029283736251145252202`,
            transactionId: "29292982171293702",
            transactionDate: '02 dec 2022',
            refundStatus: 'Refund in progress',
            refundID: 2827262525102,
            amount: '599.00'
        },
        {
            objectNo: 3,
            orderNo: `029283736251145252203`,
            transactionId: "29292982171293703",
            transactionDate: '03 dec 2022',
            refundStatus: 'Refund failed',
            refundID: 2827262525103,
            amount: '599.00'
        },
        {
            objectNo: 4,
            orderNo: `029283736251145252204`,
            transactionId: "29292982171293704",
            transactionDate: '04 dec 2022',
            refundStatus: 'Refund success',
            refundID: 2827262525104,
            amount: '399.00'
        },
        {
            objectNo: 5,
            orderNo: `029283736251145252205`,
            transactionId: "29292982171293705",
            transactionDate: '05 dec 2022',
            refundStatus: 'Refund in progress',
            refundID: 2827262525105,
            amount: '599.00'
        },
        {
            objectNo: 6,
            orderNo: `029283736251145252206`,
            transactionId: "29292982171293706",
            transactionDate: '06 dec 2022',
            refundStatus: 'Refund failed',
            refundID: 2827262525106,
            amount: '599.00'
        },
        {
            objectNo: 7,
            orderNo: `029283736251145252207`,
            transactionId: "29292982171293707",
            transactionDate: '07 dec 2022',
            refundStatus: 'Refund success',
            refundID: 2827262525107,
            amount: '399.00'
        },
        {
            objectNo: 8,
            orderNo: `029283736251145252208`,
            transactionId: "29292982171293708",
            transactionDate: '08 dec 2022',
            refundStatus: 'Refund in progress',
            refundID: 2827262525108,
            amount: '599.00'
        },
        {
            objectNo: 9,
            orderNo: `029283736251145252209`,
            transactionId: "29292982171293709",
            transactionDate: '09 dec 2022',
            refundStatus: 'Refund failed',
            refundID: 2827262525109,
            amount: '599.00'
        },
    ];


    const imagePerRow = 3;
    const [next, setNext] = useState(imagePerRow);


    const handleMoreImage = () => {
        setNext(next + 2);
    };

    return (
        <>
            <section className="px-5 py-10 flex flex-col gap-y-5 sm:gap-y-10">

                <div className="text-2xl font-medium">
                    My Transactions
                </div>

                <div className="flex flex-col ">

                    {/* row :: Heading (1) */}
                    <div className="pb-8 flex flex-col sm:flex-row gap-x-4 gap-y-2 lg:gap-x-0 justify-between border-b border-gray-400">

                        <div className="h1.1 lg:w-1/3 flex sm:justify-start">
                            <h3 className="text-xl font-semibold text-black">
                                Activities
                            </h3>
                        </div>
                        <div className="h1.2 lg:w-1/3 flex sm:pl-[12.5%]">
                            <h3 className="w-[256px] text-xl font-semibold text-black inline-flex sm:justify-center sm:-ml-6">
                                Status
                            </h3>
                        </div>
                        <div className="h1.3 lg:w-1/3 flex sm:justify-end">
                            <h3 className="text-xl font-semibold text-black">
                                Amount
                            </h3>
                        </div>
                    </div>

                    {refundArray?.slice(0, next)?.map((curItem, index) => {
                        return (
                            <TransactionRow key={curItem.objectNo}
                                {...curItem}>
                            </TransactionRow>
                        )
                    })}

                </div>


                {next < refundArray?.length && (
                    <button className="flex justify-center" onClick={handleMoreImage}>
                        <span className="cursor-pointer text-xl font-bold text-cyan-500 underline underline-offset-[12px]">
                            View More
                        </span>
                    </button>
                )}
            </section>

            {/* <div className="flex flex-col gap-y-10">
            <div className="w-full bg-antiquewhite rounded-b-full px-20 py-2">
              <Header></Header>
            </div>
            <main className="">
            </main>
          </div> */}
        </>
    )
}

export default TranSection