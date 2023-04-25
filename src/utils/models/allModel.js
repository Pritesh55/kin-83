import mongoose, { model, models } from "mongoose";



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


// mongoose.models = {};
const PtModels2 = mongoose.models.PtModels2  || mongoose.model("PtModels3", ptSchema2 );

export default PtModels2;
