
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    console.log("Now , Lets's Add data in Database");

    const sortAllProductsList = await mongoose.connection.db.collection('ptmodels2').find({}).sort({ "id": 1 });

    // console.log(`--------------------------------------------`);
    // console.log(sortAllProductsList);
    // console.log(`--------------------------------------------`);

    return NextResponse.json({
        success: true,
        message: "Product sorted Successfully...",
        products: sortAllProductsList
    });


}


