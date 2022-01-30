const mongoose = require('mongoose');

const connectDB = async () => {
    console.log(process.env.MONGO_URI);
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log('Connected to Atlas');
    } catch (e) {
        console.error(e.message);
        process.exit();
    }
};
module.exports = connectDB;
