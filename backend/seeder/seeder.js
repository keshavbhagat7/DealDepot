import mongoose from 'mongoose';
import products from './data.js';
import Product from '../models/product.js';

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb+srv://bhagatk11:november01@dealdepot.hca5f.mongodb.net/dealDepot?retryWrites=true&w=majority&appName=DealDepot");
        await Product.deleteMany();
        console.log("Products deleted");

        await Product.insertMany(products);
        console.log("Products seeded");

        process.exit()
    }
    catch (error) {
        console.log(error.message);
        process.exit(1);
    }
};

seedProducts();