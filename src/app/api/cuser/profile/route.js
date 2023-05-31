import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    let { userName, userEmail, valueAddress, cityNameInput, stateNameInput, pincodeInput,
        mobileNoInput, emailIdInput, upProfile, upShipping } = await request.json();
    // let { userEmail2, id, title, description, price, quantity, img, isAddedToCart } = data;

    let updateProfile;
    let updateShipDetail;
    let message = '';

    if (upProfile == true) {
        updateProfile = await mongoose.connection.db.collection('user').updateOne(
            { userEmail: userEmail },


            {


                $set: {
                    profileInfo: [{
                        userName: `${userName}`,
                        emailId: `${emailIdInput}`,
                        mobileNo: mobileNoInput,
                        address: `${valueAddress}`,
                        cityName: `${cityNameInput}`,
                        stateName: `${stateNameInput}`,
                        pincode: pincodeInput,
                    }]
                }



            }






        );
    }

    if (upShipping == true) {
        updateShipDetail = await mongoose.connection.db.collection('user').updateOne(
            { userEmail: userEmail },
            {
                $set: {
                    shipDetail: [{
                        mobileNo: mobileNoInput,
                        emailId: `${emailIdInput}`,
                        address: `${valueAddress}`,
                        cityName: `${cityNameInput}`,
                        stateName: `${stateNameInput}`,
                        pincode: pincodeInput,
                    }]
                }

            }
        );
    }

    if (updateProfile == undefined) {
        updateProfile = {};
        message = 'Your Shipping Detail Updated Successfully...';
    }

    if (updateShipDetail == undefined) {
        updateShipDetail = {}
        message = 'Your Profile data Detail Updated Successfully...';
    }

    return NextResponse.json({
        message,
        success: true,
        updateProfile,
        updateShipDetail

    });


}
