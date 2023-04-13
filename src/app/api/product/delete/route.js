import dbConnect from "@/utils/database";
import { NextResponse } from "next/server";


export async function DELETE(request) {

    await dbConnect();

    const {id} = await request.json();

    console.log(` ---------------- id -----------------------`);
    console.log(id);
    console.log(` ---------------- id -----------------------`);

    console.log(id);

    const res = await fetch(`http://localhost:3000/api/product/zlist/${id}`,
        {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );


    // console.log(`-----------------------------------`);
    // console.log(readAllProductsList);
    // console.log(`---------------------------------`);
    // const sortAllProductsList = await PtModels2.find().sort({ "id": 1 });



    return NextResponse.json({
        success: true,
        message: "Jio Phone Next :: Product Deleted Successfully..."
    });


}

