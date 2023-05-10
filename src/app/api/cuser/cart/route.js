
import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function PUT(request) {

    await dbConnect();

    // const newId = request.url.slice(request.url.lastIndexOf('/') + 1);
    // let newIdNum = Number(newId);

    let data = await request.json();
    let { userEmail, id, title, description, price, quantity, img, isAddedToCart } = data;


    var idNum = Number(id);
    var priceNum = Number(price);
    // ---------------------------------------------------------------------------------


    let findId = await mongoose.connection.db.collection('user').findOne(
        { userEmail: userEmail });

    let cart = findId?.cart;



    let message = "";
    let reCount = 0;

    if (cart != null && cart != undefined) {
        cart.map((cart) => { reCount = (cart.id == idNum) ? reCount + 1 : reCount });
    } else {
        cart= [];
    }



    let updateUser;

    if (reCount == 0) {

        updateUser = await mongoose.connection.db.collection('user').updateOne(
            { userEmail: userEmail },
            {
                $push: {
                    cart: {
                        id: idNum, title, description, price: priceNum, quantity, img, isAddedToCart
                    }
                }

            }
        );

        message = "Thank you,Your Product is Added to Cart Sucessfully..."

    } else if (reCount > 0) {
        message = "Oh... Product is Already in the cart";
    }


    // ---------------------------------------------------------------------------------

    let cartProduct = {
        id: idNum, title, description, price: priceNum, quantity, img, isAddedToCart
    };


    return NextResponse.json({
        message: message,
        success: true,
        data: data,
        cartProduct: cartProduct,
        updateUser: updateUser,
        userEmail: userEmail,
        findId: findId,
        cart: cart,
        reCount: reCount
    });





}

