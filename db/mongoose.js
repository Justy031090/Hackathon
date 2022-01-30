const mongoose = require('mongoose');
const env = require('dotenv');
env.config();

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Atlas');
    } catch (e) {
        console.error(e.message);
        process.exit();
    }
};
module.exports = connectDB;
