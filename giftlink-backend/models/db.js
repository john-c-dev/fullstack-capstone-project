// db.js
require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;

// MongoDB connection URL with authentication options
let url = `${process.env.MONGO_URL}`;

let dbInstance = null;
const dbName = "giftdb";

async function connectToDatabase() {
    if (dbInstance) {
        console.log("Returning existing database instance.");
        return dbInstance;
    }

    console.log("Initializing new MongoDB client...");
    const client = new MongoClient(url);

    try {
        // Task 1: Connect to MongoDB
        console.log("Attempting to connect to MongoDB...");
        await client.connect();
        console.log("Successfully connected to MongoDB!");

        // Task 2: Connect to the database
        console.log(`Accessing database: ${dbName}...`);
        dbInstance = client.db(dbName);
        console.log(`Connected to database: ${dbName}`);

        // Task 3: Return database instance
        console.log("Returning new database instance.");
        return dbInstance;
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        throw error;  // Ensure error propagates for better debugging
    }
}

module.exports = connectToDatabase;
