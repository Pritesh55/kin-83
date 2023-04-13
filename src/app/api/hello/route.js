
import dbConnect from "@/utils/database";
import { NextResponse } from "next/server";

export async function GET(request) {

  await dbConnect();

  // console.log("Now , lET'S cREATE dATA")
  // console.log(`--------------------------------------------`);
  // console.log(`---------        The END       ---------`);
  // console.log(`--------------------------------------------`);

  return NextResponse.json({
    success: true,
    message: "Product created Successfully...",
  }
  );
}
