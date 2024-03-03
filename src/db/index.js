import mongoose from "mongoose";
import 'dotenv/config';

const connectDB = async()=>{
    try {
        const connectionInstance= await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DB_NAME}`);
        // console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance.connection.host}`)
        console.log(`\n MongoDB connected !!`)
    } catch (error) {
        console.log('MongoDB connection Failed', error);
        process.exit(1);
    }
}

export default connectDB;