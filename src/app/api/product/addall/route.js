
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    await dbConnect();

    console.log("Now , Lets's Add data in Database");

    // let addProduct =
    await mongoose.connection.db.collection('ptmodels2').insertMany(
        [
            {
                id: 1,
                title: "Google Pixal 7 pro",
                description: "black in color",
                price: "200",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 2,
                title: "One Plus M40",
                description: "white in color",
                price: "300",
                img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 3,
                title: "Redmi C9",
                description: "black in color",
                price: "500",
                img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 4,
                title: "Iphone 13",
                description: "Best mobile ever",
                price: "900",
                img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
                quantity: 1,
                isAddedToCart: false

            },
            {
                id: 5,
                title: "Moto g5 plus",
                description: "black in color",
                price: "1000",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 6,
                title: "Microsoft j2",
                description: "black in color",
                price: "2500",
                img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 7,
                title: "Nokia c01 plus",
                description: "black in color",
                price: "5000",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 8,
                title: "Realme 2 pro",
                description: "Best mobile ever",
                price: "400",
                img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 9,
                title: "Infinix k25 plus",
                description: "black in color",
                price: "600",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 10,
                title: "Jio Phone Next ",
                description: "black in color",
                price: "6500",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            },
            {
                id: 11,
                title: "Intex P55 ",
                description: "black in color",
                price: "3200",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
                isAddedToCart: false
            }
        ],
        function(error, docs) {}
    );

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
