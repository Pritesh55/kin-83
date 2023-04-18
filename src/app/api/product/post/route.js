import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function POST(request) {

    await dbConnect();
    // 

    // {
    //     "id": 11,
    //     "title": "Varun Phone Next ",
    //     "description": "White in color",
    //     "price": "89500",
    //     "img": "varun://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    //     "quantity": 5
    // }

    const { id, title, description, price, img, quantity } = await request.json();

    await PtModels2.create({
        id,
        title,
        description,
        price,
        img,
        quantity
    },);

    const res = await fetch("http://localhost:3000/api/product/post",
        {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            }
        }
    );


    // console.log(`-----------------------------------`);
    // console.log(readAllProductsList);
    // console.log(`---------------------------------`);
    const sortAllProductsList = await PtModels2.find().sort({ "id": 1 });



    return NextResponse.json({
        success: true,
        message: "Jio Phone Next :: New Product created Successfully...",
        sortAllProductsList : sortAllProductsList
    });


}
