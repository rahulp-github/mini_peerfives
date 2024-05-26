import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const mongoURI = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        const connection = await mongoose.connect(mongoURI);
        console.log(`connected with database on : ${connection.connection.host}`);
    } catch (err) {
        console.log(err);
    }
};

export default connectDb;
