import dbConnect from "@/utils/database";
import { PtModels2 } from "@/utils/models/allModel";

export async function GET(request) {

    await dbConnect();

    const readAllProductsList = await PtModels2.find({});

    // console.log(`-----------------------------------`);
    // console.log(readAllProductsList);
    // console.log(`---------------------------------`);


    // return NextResponse.json({
    //     success: true,
    //     message: "Product Read Successfully...",
    //     products: readAllProductsList
    // });

    return readAllProductsList;
}
