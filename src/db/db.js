const dns = require("dns");
dns.setServers(["8.8.8.8", "1.1.1.1"]);
const mongoose = require('mongoose');
require("dotenv").config();

const connectDB = async () => {
    try { 
            mongoose.connect(process.env.MONGODB_URL);
            console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = connectDB;