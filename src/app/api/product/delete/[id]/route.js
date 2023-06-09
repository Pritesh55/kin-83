import dbConnect from "@/utils/database";
import mongoose from "mongoose";
// import { PtModels2 } from "@/utils/models/allModel";
import { NextResponse } from "next/server";

export const revalidate = 1;
// Data will be fetch from locagost:3000/api/product/read at every 01 sec....

export async function GET(request) {

    await dbConnect();

    const id = request.url.slice(request.url.lastIndexOf('/') + 1);

    console.log(` --------------- id --------------- `);
    console.log(id);
    console.log(` --------------- id --------------- `);

    let idNum = Number(id);

    let readptModels2 = await mongoose.connection.db.collection('ptmodels2').updateOne(
        { id: idNum },
        {
            $set: { price: 9375978809 },
        }
    );

    // await dbConnect();

    // const deleteAll = await PtModels2.deleteMany();

    return NextResponse.json({
        success: true,
        message: "Your Product Updated Successfully...(Nothing)",
        readptModels2: readptModels2
    });


}

export async function DELETE(request) {

    await dbConnect();

    let id = request.url.slice(request.url.lastIndexOf('/') + 1);

    let idNum = Number(id);

    let deleteOneProduct = await mongoose.connection.db.collection('ptmodels2').deleteOne({ id: idNum });

    let readptModels2 = mongoose.connection.db.collection('ptmodels2').find({ id: idNum }).toArray();

    return NextResponse.json({
        success: true,
        message: "Your Product Deleted Successfully...(Nothing)",
        id: idNum,
        deleteOneProduct: deleteOneProduct,
        readptModels2: readptModels2

    });
}



