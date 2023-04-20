import dbConnect from '@/utils/database';
import mongoose from 'mongoose';
import { NextResponse } from 'next/server';

export async function GET(request) {

  await dbConnect();
 

  const Cat = mongoose.models.Cat || mongoose.model('Cat', { name: String });
  const kitty =  Cat.create({name: "VarunDev"});

  let  readkitty = await Cat.find({});

  // console.log(`-----------------------------------`);
  // console.log(readAllProductsList);
  // console.log(`---------------------------------`);


  return NextResponse.json({
    success: true,
    message: "Product Read Successfully...",
    products: readkitty
  });

  // return readAllProductsList;
}

