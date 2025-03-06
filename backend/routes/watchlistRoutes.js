const express = require("express");
const Watchlist = require("../models/Watchlist");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Add movie to watchlist
router.post("/", authMiddleware, async (req, res) => {
    const { movieId, title, poster } = req.body;
    try {
        const newMovie = new Watchlist({ userId: req.user.id, movieId, title, poster });
        await newMovie.save();
        res.status(201).json(newMovie);
    } catch (error) {
        res.status(500).json({ error: "Error adding movie to watchlist" });
    }
});

// Get user's watchlist
router.get("/", authMiddleware, async (req, res) => {
    try {
        const watchlist = await Watchlist.find({ userId: req.user.id });
        res.json(watchlist);
    } catch (error) {
        res.status(500).json({ error: "Error fetching watchlist" });
    }
});

// Update watched status
router.put("/:id", authMiddleware, async (req, res) => {
    try {
        const movie = await Watchlist.findByIdAndUpdate(req.params.id, { watched: req.body.watched }, { new: true });
        res.json(movie);
    } catch (error) {
        res.status(500).json({ error: "Error updating movie status" });
    }
});

// Delete movie from watchlist
router.delete("/:id", authMiddleware, async (req, res) => {
    try {
        await Watchlist.findByIdAndDelete(req.params.id);
        res.json({ message: "Movie removed from watchlist" });
    } catch (error) {
        res.status(500).json({ error: "Error deleting movie" });
    }
});

module.exports = router;
