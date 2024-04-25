import mongoose from "mongoose";

export const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://fastfood:fastfood7428@cluster0.8u0wxeu.mongodb.net/fastfood', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('DB connected');
    } catch (error) {
        console.error('DB connection error:', error);
    }
};
