import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    let readAllProductsList;

    // const collectionInfos = await mongoose.connection.db.listCollections().toArray();

    // if (PtModels2 != undefined) {
    //     readAllProductsList = await mongoose.connection.db.ptModels2.find({});
    // }

    const readptModels2 = await mongoose.connection.db.collection('ptmodels2').find({}).toArray();



    console.log(`-----------------------------------`);
    console.log(readptModels2);
    console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Product Read Successfully...",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        readptModels2: readptModels2,
    });

    // return readAllProductsList;
}
