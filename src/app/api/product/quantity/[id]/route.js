
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    const newId = request.url.slice(request.url.lastIndexOf('/') + 1);
    let newIdNum = Number(newId);

    let data = await request.json();
    let { quantity } = data;

    let updateptModels2 = await mongoose.connection.db.collection('ptmodels2').updateOne(
        { id: newIdNum },
        {
            $set: {
                quantity: quantity
            },
        }
    );

    return NextResponse.json({
        success: true,
        message: "Your Product Updated Successfully...(Nothing)",
        newId: newIdNum,
        quantity:quantity,
        data: data,
        updateptModels2: updateptModels2

    });

}

