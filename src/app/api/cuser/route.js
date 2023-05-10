import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    await dbConnect();

    // console.log(mongoose.connection.readyState);

    let readUser = await mongoose.connection.db.collection('user').find({}).toArray();

    return NextResponse.json({
        success: true,
        message: "All Users Read Successfully...",

        readUser: readUser,
    });
}
