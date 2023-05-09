import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function POST(request) {

    await dbConnect();

    const { userName, userEmail } = await request.json();

    const newUserdata = {
        userName,
        userEmail,
        cart:[]
    };

    // console.log(id);
    // console.log(title);
    // console.log(description);

    // await PtModels2.create(createProductdata);


    // let isUser = mongoose.connection.db.collection('user').find({ userEmail: `${userEmail}` });
    // let isUser = mongoose.connection.db.collection('user').find({ "userEmail": "alkahere17@gmail.com"});

    // Working :: 
    // -------------------
    let a = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });


    if (a == null) {
        await mongoose.connection.db.collection('user').insertOne(newUserdata);
    }

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
    let sortAllUsersList = await mongoose.connection.db.collection('user').find().toArray();



    return NextResponse.json({
        success: true,
        message: "New User created Successfully... ram ram",
        method: request.method,
        sortAllUsersList: sortAllUsersList,
        a: a
        // userEmail: userEmail,
        // isUser: isUser,


    });


}
