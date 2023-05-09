

import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function DELETE(request) {

    await dbConnect();

    let readptModels2 = mongoose.connection.db.collection('user').find({}).toArray();

    if (readptModels2 != []) {
        await mongoose.connection.db.collection('user').deleteMany();
    }


    return NextResponse.json({
        success: true,
        message: "All user Deleted Successfully..",
        readptModels2: readptModels2

    });

}
