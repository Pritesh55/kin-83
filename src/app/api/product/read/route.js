import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {


    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        console.log('Read connected');
        console.log(mongoose.connection.readyState); //logs 1
    }



    // let readAllProductsList;

    // const collectionInfos = await mongoose.connection.db.listCollections().toArray();

    // if (PtModels2 != undefined) {
    //     readAllProductsList = await mongoose.connection.db.ptModels2.find({});
    // }

    let readptModels2 = [{}];
    if (mongoose.connection.readyState == 1) {
        readptModels2 = await mongoose.connection.db.collection('ptmodels2').find({}).toArray();
    }


    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    if (readptModels2 === undefined) {
        readptModels2 = [{}];
    }

    return NextResponse.json({
        success: true,
        message: "Product Read Successfully...",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        readptModels2: readptModels2,
    });

    // return readAllProductsList;
}
