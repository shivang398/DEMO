const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const connectDB = async () => {
    try {
        let uri = process.env.MONGODB_URI;

        // Use an in-memory database to prevent crashes if no local server is installed
        if (uri.includes('127.0.0.1') || uri.includes('localhost')) {
            const mongoServer = await MongoMemoryServer.create();
            uri = mongoServer.getUri();
            console.log("⚠️  Local DB not found. Started embedded In-Memory Database for development!");
        }

        const conn = await mongoose.connect(uri);
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
