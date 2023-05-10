import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 0.1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        // console.log('Read connected');
        // console.log(mongoose.connection.readyState); //logs 1
    }

    let userEmail = request.url.slice(request.url.lastIndexOf('/') + 1);




    // let readAllProductsList;

    // const collectionInfos = await mongoose.connection.db.listCollections().toArray();

    // if (PtModels2 != undefined) {
    //     readAllProductsList = await mongoose.connection.db.ptModels2.find({});
    // }



    // a = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });

    // let readptModels2 = await mongoose.connection.db.collection('user').find({}).toArray();




    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Product Read Successfully...",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        // a: a,
        userEmail: userEmail
    });

    // return readAllProductsList;
}
