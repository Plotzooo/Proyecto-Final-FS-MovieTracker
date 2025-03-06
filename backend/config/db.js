const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI, {
            serverSelectionTimeoutMS: 5000, // Tiempo de espera para conexión
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error while trying to connect to MongoDB: ${error.message}`);
        process.exit(1); // Detener la app si no se conecta
    }
};

module.exports = connectDB;