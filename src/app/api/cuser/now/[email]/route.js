import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        // console.log('Read connected');
        // console.log(mongoose.connection.readyState); //logs 1
    }

    let apiUrl = request.url;
    let userEmail = '';

    if (apiUrl.includes("@")) {
        userEmail = apiUrl.slice(request.url.lastIndexOf('/') + 1);

    }



    // let readAllProductsList;

    // const collectionInfos = await mongoose.connection.db.listCollections().toArray();

    // if (PtModels2 != undefined) {
    //     readAllProductsList = await mongoose.connection.db.ptModels2.find({});
    // }
    let userInfo = {};

    userInfo = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });

    let cartProducts = userInfo?.cart;

    let totalPricePerProduct = 0;
    let totalAmount = cartProducts?.reduce(
        (acc, currentItem) => {
            totalPricePerProduct = currentItem.price * currentItem.quantity;
            return acc + parseInt(totalPricePerProduct);
        }, 0
    );


    let totalItem = cartProducts?.reduce(
        (acc, currentItem) => {
            acc = (currentItem.isAddedToCart) ? acc + currentItem.quantity : acc
            return acc
        }, 0
    );

    totalAmount = (cartProducts == undefined) ? 0 : totalAmount;
    totalItem = (cartProducts == undefined) ? 0 : totalItem;
    cartProducts = (cartProducts == undefined) ? [] : cartProducts;



    // let readptModels2 = await mongoose.connection.db.collection('user').find({}).toArray();

    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Product Read Successfully...",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        // a: a,
        userInfo: userInfo,
        cartProducts:cartProducts,
        totalAmount,
        totalItem,
        apiUrl: apiUrl,
        userEmail: userEmail
    });

    // return readAllProductsList;
}

export async function DELETE(request) {

    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        // console.log('Read connected');
        // console.log(mongoose.connection.readyState); //logs 1
    }

    let userEmail = request.url.slice(request.url.lastIndexOf('/') + 1);


    let DeletedUser = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });



    // let data = await request.json();
    // console.log(data);
    // let idNum = Number(id);


    // let DeletedUser2 = await mongoose.connection.db.collection('user').updateOne(
    //     { userEmail: `${userEmail}` },
    //     { $pull: { cart: { id: 6 } } }
    // );




    // let cart = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` }).cart.deleteOne({ id: idNum });

    // let readptModels2 = await mongoose.connection.db.collection('user').find({}).toArray();

    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Product DELETED Successfully...",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        // a: a,
        DeletedUser: DeletedUser,

        // data: data
        // // cart: cart,
        // userEmail: `${userEmail}`,
        // id:idNum,
        // DeletedUser2:DeletedUser2,
    });

    // return readAllProductsList;
}













