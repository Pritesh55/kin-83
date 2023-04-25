
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    console.log("Now , Lets's Add data in Database");

    // Delete all the documents....
    let deleteAllProduct = await mongoose.connection.db.collection('ptmodels2').deleteMany();

    // console.log(`--------------------------------------------`);
    // console.log(deleteAllProduct);
    // console.log(`--------------------------------------------`);

    let readptModels2 = await mongoose.connection.db.collection('ptmodels2').find({}).toArray();

    return NextResponse.json({
        success: true,
        message: "All Product Deleted Successfully...",
        // products: allProductsList
        readptModels2: readptModels2,
    }
    );


}
