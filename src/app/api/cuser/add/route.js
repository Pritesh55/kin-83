import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 0.3;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function POST(request) {

    let message = '';

    await dbConnect();

    const { userName, userEmail } = await request.json();



    // console.log(id);
    // console.log(title);
    // console.log(description);

    // await PtModels2.create(createProductdata);


    // let isUser = mongoose.connection.db.collection('user').find({ userEmail: `${userEmail}` });
    // let isUser = mongoose.connection.db.collection('user').find({ "userEmail": "alkahere17@gmail.com"});

    // Working :: 
    // -------------------
    let usersMatchedTotal;

    if (userEmail !== undefined && userEmail !== null) {
        // Check if userEmail From Post-request is exists in the database....
        usersMatchedTotal = await mongoose.connection.db.collection('user').findOne({ userEmail: `${userEmail}` });

        // if userEmail From Post-request is not there in database....
        // then Only, usersMatchedTotal will be null....
        // then insert this new user in the database....
        if (usersMatchedTotal === null && usersMatchedTotal !== undefined) {

            const newUserdata = {
                userName,
                userEmail,
                cart: [],
                totalItem: 0,
                totalAmount:0
            };

            await mongoose.connection.db.collection('user').insertOne(newUserdata);

            message = `Welcome ${userName} , (New User is created successfully)`;
        } else {
            message = `Welcome Back ${userName} , Nice to see you again...`;
        }
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
    let allUsersList = await mongoose.connection.db.collection('user').find().toArray();
    let totalUsers = allUsersList.length;


    return NextResponse.json({
        message,
        success: true,
        method: request.method,
        // usersMatchedTotal,
        userName,
        userEmail,
        usercart: usersMatchedTotal?.cart,
        allUsersList,
        totalUsers: `Total ${totalUsers} user...`

        // findId: findId
        // userEmail: userEmail,
        // isUser: isUser,
    });


}
