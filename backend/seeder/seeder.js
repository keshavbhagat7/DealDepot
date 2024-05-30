import mongoose from 'mongoose';
import products from './data.js';
import Product from '../models/product.js';

const seedProducts = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/dealdepot");
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