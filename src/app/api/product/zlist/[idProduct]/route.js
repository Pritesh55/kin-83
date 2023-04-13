
import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    const id = request.url.slice(request.url.lastIndexOf('/') + 1);


    const productOfUrlId = await PtModels2.findOne({ id: id })



    return NextResponse.json(
        productOfUrlId

    );
}
