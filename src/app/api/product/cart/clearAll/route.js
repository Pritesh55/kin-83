
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    let updateptModels2 = await mongoose.connection.db.collection('ptmodels2').updateMany(
        { },
        {
            $set: {
                isAddedToCart: false,
                quantity: 1
            },
        }
    );

    return NextResponse.json({
        success: true,
        message: "Your Product Updated Successfully...(Nothing)",
        updateptModels2: updateptModels2

    });

}

