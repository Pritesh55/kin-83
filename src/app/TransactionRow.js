import React from 'react'

const TransactionRow = ({ objectNo, orderNo, transactionId, transactionDate, refundStatus, refundID, amount }
) => {

    var refundColorClassName;

    if (refundStatus == 'Refund success') {
        refundColorClassName = 'text-green-600'
    } else
        if (refundStatus == 'Refund in progress') {
            refundColorClassName = 'text-orange-600'
        } else
            if (refundStatus == 'Refund failed') {
                refundColorClassName = 'text-red-600'
            }



    return (
        <>

            {/* row :: Content (2) */}
            <div className="py-5 flex flex-col gap-y-10 lg:flex-row lg:justify-between border-b border-gray-400">
                <div className="c1.1 lg:w-4/12 flex lg:justify-start">
                    <div className="flex flex-col">
                        <span className="text-lg font-bold text-cyan-500">
                            {orderNo}
                        </span>
                        <span className="text-base font-semibold text-gray-500">
                            {`Transaction id : ${transactionId}`}
                        </span>
                        <span className="text-base font-semibold text-gray-500">
                            {transactionDate}
                        </span>
                    </div>
                </div>

                {/*  */}
                <div className="c1.2 lg:w-5/12 flex lg:pl-[12.5%]">
                    <div className="">
                        <li className={`list-disc text-lg capitalize font-semibold ${refundColorClassName}`} >

                            <span className="-ml-2 text-left">
                                <span className="pl-0.5">
                                    {refundStatus}
                                </span>
                                <span className="pl-5 flex text-base text-gray-500">
                                    {`Refund ID: ${refundID}`}
                                </span>
                            </span>

                        </li>


                    </div>
                </div>
                <div className="c1.3 lg:w-3/12 flex lg:justify-end">
                    <span className={`text-xl font-semibold ${refundColorClassName}`}>
                        {`+ ₹${amount}`}
                    </span>
                </div>
            </div>
        </>
    )
}

export default TransactionRow