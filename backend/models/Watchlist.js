const mongoose = require("mongoose");

const watchlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    movieId: { type: String, required: true },
    title: { type: String, required: true },
    poster: { type: String },
    watched: { type: Boolean, default: false }  // Ensure this field exists
});

module.exports = mongoose.model("Watchlist", watchlistSchema);

