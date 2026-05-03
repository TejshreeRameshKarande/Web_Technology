const express = require("express");
const router = express.Router();

router.get("/search", (req, res) => {
    const query = req.query.query + " recipe";
    res.redirect(`https://www.google.com/search?q=${encodeURIComponent(query)}`);
});

router.get("/youtube", (req, res) => {
    const query = req.query.query + " recipe";
    res.redirect(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
});

module.exports = router;