const express = require("express");
const axios = require("axios");
const router = express.Router();


router.get("/search", async (req, res) => {
    const { query } = req.query;
    try {
        const response = await axios.get(
            `https://www.omdbapi.com/?apikey=${process.env.OMDB_API_KEY}&s=${query}`
        );
        res.json(response.data);
    } catch (error) {
        console.error("OMDB API Error:", error);
        res.status(500).json({ error: "Error fetching movies" });
    }
});

module.exports = router;