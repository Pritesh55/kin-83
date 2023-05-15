import dbConnect from "@/utils/database";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export const revalidate = 0.3;

export async function DELETE(request) {

    if (mongoose.connection.readyState !== 1) {
        await dbConnect();
        // console.log('Read connected');
        // console.log(mongoose.connection.readyState); //logs 1
    }

    // 
    let userEmail = request.url.slice(request.url.lastIndexOf('/') + 1);


    let DeletedUser = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });



    // let data = await request.json();
    // console.log(data);
    // let idNum = Number(id);


    let DeletedUser2 = await mongoose.connection.db.collection('user').updateOne(
        { userEmail: `${userEmail}` },
        {
            $set: {
              cart: [],
            },
          }
    );




    // let cart = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` }).cart.deleteOne({ id: idNum });

    // let readptModels2 = await mongoose.connection.db.collection('user').find({}).toArray();

    // mongoose.connection.close();

    // console.log(`-----------------------------------`);
    // console.log(readptModels2);
    // console.log(`---------------------------------`);


    return NextResponse.json({
        success: true,
        message: `Your Cart is Cleared Successfully..${userEmail}`,
        // products: readAllProductsList,
        // collectionInfos: collectionInfos,
        // a: a,
        DeletedUser: DeletedUser,
        // DeletedUser2: DeletedUser2,
        // data: data
        // // cart: cart,
        userEmail: `${userEmail}`,
        // id:idNum,
        DeletedUser2:DeletedUser2,
    });

    // return readAllProductsList;
}
