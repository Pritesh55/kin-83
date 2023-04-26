
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    await dbConnect();

    console.log("Now , Lets's Add data in Database");



    let addProducts = [
        {
            id: 6,
            title: "Alka Shah",
            description: "Alka Bhupendrabhai Shah",
            price: 95106,
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
            isAddedToCart: false
        },
        {
            id: 3,
            title: "Kinnari Shah",
            description: "Kinnari Varunbhai Shah",
            price: 95106,
            img: "",
            quantity: 1,
            isAddedToCart: false
        },
        {
            id: 9,
            title: "Bhupendra Shah",
            description: "Bhupendra RavikantBhai Shah",
            price: 93759,
            img: "",
            quantity: 1,
            isAddedToCart: false
        },
        {
            id: 8,
            title: "Pritesh Shah",
            description: "Pritesh Bhupendrabhai Shah",
            price: 832040,
            img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            quantity: 1,
            isAddedToCart: false
        },
       
    ];

    await mongoose.connection.db.collection('ptmodels2').insertMany(addProducts);

    // const addProduct = await mongoose.connection.db.collection('ptmodels2').create(
    // {
    // "id": 10,
    // "title": "Jio Phone Next ",
    // "description": "black in color",
    // "price": "6500",
    // "img": "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    // "quantity": 1,
    // }
    // );

    // console.log(`--------------------------------------------`);
    // console.log(addProduct);
    // console.log(`--------------------------------------------`);

    let allProductsList = await mongoose.connection.db.collection('ptmodels2').find({}).toArray();

    return NextResponse.json({
        success: true,
        message: "All Product created Successfully...",
        products: allProductsList

    }
    );
}
