import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
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
    //     "quantity": 5,

    // }

    const { id, title, description, price, img, quantity, isAddedToCart } = await request.json();

    // console.log(data);

    const idNum = Number(id);
    const priceNum = Number(price);
    const createProductdata = {
        id: idNum,
        title,
        description,
        price: priceNum,
        img,
        quantity,
        isAddedToCart
    };

    // console.log(id);
    // console.log(title);
    // console.log(description);

    // await PtModels2.create(createProductdata);
    await mongoose.connection.db.collection('ptmodels2').insertOne( createProductdata);

    // const res = await fetch("http://localhost:3000/api/product/post",
    //     {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     }
    // );


    // console.log(`-----------------------------------`);
    // console.log(readAllProductsList);
    // console.log(`---------------------------------`);
    let sortAllProductsList = await mongoose.connection.db.collection('ptmodels2').find().toArray();;



    return NextResponse.json({
        success: true,
        message: "Jio Phone Next :: New Product created Successfully...",
        method: request.method,
        sortAllProductsList: sortAllProductsList,
        message: "This is Pritesh POST Data",
        createProductdata: createProductdata
    });


}
