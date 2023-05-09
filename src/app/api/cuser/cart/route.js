
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    // const newId = request.url.slice(request.url.lastIndexOf('/') + 1);
    // let newIdNum = Number(newId);

    let data = await request.json();
    let { userEmail, id, title, description, price, quantity, img, isAddedToCart } = data;

    let idNum = Number(id);
    let priceNum = Number(price);
    // ---------------------------------------------------------------------------------
    let updateUser = await mongoose.connection.db.collection('user').updateOne(
        { userEmail: data.userEmail },
        {
            $push: {
                cart: {
                    idNum, title, description, priceNum, quantity, img, isAddedToCart
                }
            }

        }
    );

    // ---------------------------------------------------------------------------------

    return NextResponse.json({
        success: true,
        message: "Your User Cart Updated Successfully...(Nothing)",
        data: data,
        updateUser: updateUser

    });

}

