import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";


export async function GET(request) {

    await dbConnect();

    const deleteAll = await PtModels2.deleteMany();

    return NextResponse.json({
        success: true,
        message: "Jio Phone Next :: Product Deleted Successfully..."
    });


}

