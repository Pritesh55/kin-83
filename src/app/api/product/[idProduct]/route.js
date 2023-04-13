
import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    const id= request.url.slice(request.url.lastIndexOf('/') + 1);
    console.log(` ---------------- id -----------------------`);
    console.log(id);
    console.log(` ---------------- id -----------------------`);

    const sortAllProductsList = await PtModels2.findOne({ id: id })


    // console.log(`--------------------------------------------`);
    // console.log(sortAllProductsList);
    // console.log(`--------------------------------------------`);

    return NextResponse.json({
        success: true,
        message: "Product sorted Successfully...",
        id: id,
        sortAllProductsList:sortAllProductsList
    });


}


