"use client"

import mongoose from 'mongoose'

const dbConnect = async () => {
    try {

        const { connection } = await mongoose.connect('mongodb+srv://kin83:kashi8320@cluster0.afhdeml.mongodb.net/?retryWrites=true&w=majority');

        console.log(`\n \n--------------------------------------------`);
        console.log(`Your DataBase is Connected to :: \n${connection.host}`);
        console.log(`--------------------------------------------\n \n`);

    } catch (error) {
        console.log(`\n \n--------------------------------------------`);
        console.log(`Your Last Error is :: \n${error}`);
        console.log(`--------------------------------------------\n \n`);
    }

}

export default dbConnect