import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    let { userName, userEmail, valueAddress, cityNameInput, stateNameInput, pincodeInput,
        mobileNoInput, emailIdInput } = await request.json();
    // let { userEmail2, id, title, description, price, quantity, img, isAddedToCart } = data;

    let updateUser;

    updateUser = await mongoose.connection.db.collection('user').updateOne(
        { userEmail: userEmail },
        {
            $push: {
                shipDetail: {
                    address: `${valueAddress}`,
                    cityName: `${cityNameInput}`,
                    stateName: `${stateNameInput}`,
                    pincode: pincodeInput,
                    mobileNo: mobileNoInput,
                    emailId: `${emailIdInput}`,
                },
                profileInfo: {
                    userName: `${userName}`,
                    emailId: `${emailIdInput}`,
                    mobileNo: mobileNoInput,
                    address: `${valueAddress}`,
                    cityName: `${cityNameInput}`,
                    stateName: `${stateNameInput}`,
                    pincode: pincodeInput,
                }
            }

        }
    );

    return NextResponse.json({
        message: 'message',
        success: true,
        userEmail, valueAddress, cityNameInput, stateNameInput, pincodeInput,
        mobileNoInput, emailIdInput
    });


}
