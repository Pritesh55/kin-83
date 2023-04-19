import mongoose from "mongoose";



// pt => product
// console.log("now performing :: making ptSchema");

// const ptSchema = new mongoose.Schema(
//     {
//         name: String,
//         workout: Boolean,
//         height: Number
//     }
// );

// console.log("now performing :: make models Empty");
// mongoose.models = {};

// console.log("now performing :: making ptModel");

// export const PtModels = mongoose.model("PtModels", ptSchema );

const ptSchema2 = new mongoose.Schema(
    {
        id: Number,
        title: String,
        description: String,
        price: String,
        img: String,
        quantity: Number,
        isAddedToCart: Boolean,
    }
);

// console.log("now performing :: make models Empty");

// console.log("now performing :: making ptModel");

mongoose.models = {};

export const PtModels2 = mongoose.model("PtModels2", ptSchema2);

