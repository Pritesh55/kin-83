
import mongoose from 'mongoose'

const dbConnect = async () => {
    try {

        if (mongoose.connection.readyState !== 1) {
            console.log('Not connected');
            console.log(mongoose.connection.readyState); //logs 1



            const { connection } = await mongoose.connect('mongodb+srv://kin83:kashi8320@cluster0.afhdeml.mongodb.net/?retryWrites=true&w=majority', { keepAlive: true, keepAliveInitialDelay: 300000, useUnifiedTopology: true });

            console.log(`\n \n--------------------host------------------------`);
            console.log(`Your DataBase is Connected to :: \n${connection.host}`);
            console.log(`Your DataBase is Connected to :: \n${connection.host}`);

            console.log(`--------------------------host------------------\n \n`);
        }


    } catch (error) {
        console.log(`\n \n--------------------error------------------------`);
        console.log(`Your Last Error is :: \n${error}`);
        console.log(`------------------------error--------------------\n \n`);
    }

    console.log(mongoose.connection.readyState); //logs 0

    // mongoose.connection.on('connecting', () => {
    //     console.log('connecting')
    //     console.log(mongoose.connection.readyState); //logs 2
    // });
    // mongoose.connection.on('connected', () => {
    //     console.log('connected');
    //     console.log(mongoose.connection.readyState); //logs 1
    // });
    // mongoose.connection.on('disconnecting', () => {
    //     console.log('disconnecting');
    //     console.log(mongoose.connection.readyState); // logs 3
    // });
    // mongoose.connection.on('disconnected', () => {
    //     console.log('disconnected');
    //     console.log(mongoose.connection.readyState); //logs 0
    // });

}

export default dbConnect