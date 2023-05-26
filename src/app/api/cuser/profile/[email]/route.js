import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    const userEmail = request.url.slice(request.url.lastIndexOf('/') + 1);

    let data = await request.json();
    // let { userEmail2, id, title, description, price, quantity, img, isAddedToCart } = data;

    return NextResponse.json({
        message: message,
        success: true,
        data: data,
        userEmail: userEmail,
    });





}
