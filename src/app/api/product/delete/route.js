import dbConnect from "@/utils/database";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    await dbConnect();

    // const deleteAll = await PtModels2.deleteMany();

    return NextResponse.json({
        success: true,
        message: "Your Product Deleted Successfully...(Nothing)"
    });


}

