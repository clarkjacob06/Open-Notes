import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log('Database connected')
    } catch (error) {
        console.log('Failed to connect to database');
        process.exit(-1);
    }
}

export default connectDB