import dbConnect from "@/utils/database";
// import PtModels2 from "@/utils/models/allModel";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function DELETE(request) {

    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        // console.log('Read connected');
        // console.log(mongoose.connection.readyState); //logs 1
    }

    let params = request.url.slice(request.url.lastIndexOf('/') + 1);
    let params2 = request.url;
    let params3 = request.url.split("/");
    let userEmail = params3[6];
    let deleteProductId = params3[7];
    let IdNum = Number(deleteProductId);

    let userInfo = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });
    let cart = userInfo.cart;


    // let data = await request.json();
    // console.log(data);
    // let idNum = Number(id);


    let DeletedUser2 = await mongoose.connection.db.collection('user').updateOne(
        { userEmail: `${userEmail}` },
        { $pull: { cart: { id: IdNum } } }
    );




    // let cart = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` }).cart.deleteOne({ id: idNum });

    // let readUserCart = await mongoose.connection.db.collection('user').find({}).toArray();

    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: "Thank you, Product is removed from Cart..",
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        // a: a,
        // DeletedUser: DeletedUser,
        // DeletedUser2: DeletedUser2,
        userEmail: userEmail,
        deleteProductId: deleteProductId,
        DeletedUser2: DeletedUser2,
        userInfo: userInfo,
        // data: data
        cart: cart,
        // userEmail: `${userEmail}`,
        // id:idNum,
        // DeletedUser2:DeletedUser2,
    });

    // return readAllProductsList;
}
