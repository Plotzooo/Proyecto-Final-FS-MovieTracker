require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const authRoutes = require("./routes/authRoutes");
const movieRoutes = require("./routes/movieRoutes");
const watchlistRoutes = require("./routes/watchlistRoutes");


//Middleware
const app = express();
app.use(express.json());
app.use(cors());


//Mongo Connection
connectDB();

//Base route
app.get("/", (req, res) => {
    res.send("API is running...");
});


//Main routes
app.use("/auth", authRoutes);

app.use("/movies", movieRoutes);

app.use("/watchlist", watchlistRoutes);


//Starting Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
