
import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export async function GET(request) {

    await dbConnect();

    console.log("Now , Lets's Add data in Database");

    const addProduct = await PtModels2.insertMany(
        [
            {
                id: 1,
                title: "Samsung S21",
                description: "black in color",
                price: "200",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
            },
            {
                id: 2,
                title: "Samsung M21",
                description: "white in color",
                price: "300",
                img: "https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,
            },
            {
                id: 3,
                title: "Redmi 9",
                description: "black in color",
                price: "500",
                img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
                quantity: 1,
            },
            {
                id: 4,
                title: "Iphone 12",
                description: "Best mobile ever",
                price: "900",
                img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
                quantity: 1,



            },
            {
                id: 5,
                title: "Samsung S21",
                description: "black in color",
                price: "1000",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,



            },
            {
                id: 6,
                title: "Redmi 9",
                description: "black in color",
                price: "2500",
                img: "https://images-na.ssl-images-amazon.com/images/I/71A9Vo1BatL._SL1500_.jpg",
                quantity: 1,



            },
            {
                id: 7,
                title: "Samsung S21",
                description: "black in color",
                price: "5000",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,



            },
            {
                id: 8,
                title: "Iphone 12",
                description: "Best mobile ever",
                price: "400",
                img: "https://images-na.ssl-images-amazon.com/images/I/71hIfcIPyxS._SL1500_.jpg",
                quantity: 1,



            },
            {
                id: 9,
                title: "Samsung S21",
                description: "black in color",
                price: "600",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,



            },
            {
                id: 10,
                title: "Jio Phone Next ",
                description: "black in color",
                price: "6500",
                img: "https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
                quantity: 1,



            }
        ]
    );

    // const addProduct = await PtModels2.create(
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

    const allProductsList = await PtModels2.find();

    return NextResponse.json({
        success: true,
        message: "Jio Phone Next :: New Product created Successfully...",
        products: allProductsList
    }
    );
}
