
import dbConnect from "@/utils/database";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();
    
    console.log("Now , Lets's Add data in Database");

    // Delete all the documents....
    // const deleteAllProduct = await PtModels2.find().deleteMany();

    // console.log(`--------------------------------------------`);
    // console.log(deleteAllProduct);
    // console.log(`--------------------------------------------`);

    // const allProductsList = await PtModels2.find();

    return NextResponse.json({
        success: true,
        message: "Product Deleted Successfully...",
        // products: allProductsList
    }
    );


}
