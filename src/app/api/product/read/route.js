import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";



export async function GET(request) {

    await dbConnect();

    const readAllProductsList = await PtModels2.find().sort({ "id": 1 });

    // console.log(`-----------------------------------`);
    // console.log(readAllProductsList);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Product sorted Successfully...",
        products: readAllProductsList
    });


}
