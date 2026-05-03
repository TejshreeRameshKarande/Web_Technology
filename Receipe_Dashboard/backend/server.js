require('dotenv').config(); // ✅ ADD THIS AT TOP

const express = require("express");
const cors = require("cors");
const fetch = require("node-fetch");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Test route
app.get("/", (req, res) => {
    res.send("✅ Server is working");
});

// 🤖 AI Recipe API
app.post("/getRecipe", async (req, res) => {
    const recipeName = req.body.recipe;
    const language = req.body.language || "English";

    if (!recipeName) {
        return res.json({ recipe: "❌ No recipe name provided" });
    }

    try {
        const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
            method: "POST",
            headers: {
                "Authorization": `Bearer ${process.env.GROQ_API_KEY}`, // ✅ FIXED
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                temperature: 0.2,
                messages: [
                    {
                        role: "user",
                        content: `You are a professional chef and native ${language} speaker.

Task:
1. First understand the recipe for "${recipeName}" in English.
2. Then rewrite it naturally in ${language}.
3. Do NOT translate word-by-word.
4. Use commonly used cooking terms in ${language}.
5. Keep it simple, clear, and correct.

Format:
Ingredients:
- ...

Steps:
1. ...
2. ...

Make it sound natural like a local person explaining the recipe.`
                    }
                ]
            })
        });

        const data = await response.json();

        console.log("FULL RESPONSE:", data);

        const recipeText = data?.choices?.[0]?.message?.content;

        if (!recipeText) {
            return res.json({
                recipe: "❌ API not returning data. Check terminal."
            });
        }

        res.json({ recipe: recipeText });

    } catch (error) {
        console.log("SERVER ERROR:", error);
        res.json({ recipe: "❌ Server error" });
    }
});

// 🎥 YouTube route
app.get("/youtube", (req, res) => {
    const query = req.query.query + " recipe";
    res.redirect(`https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`);
});

// 🚀 Start server
app.listen(3000, () => {
    console.log("🚀 Server running at http://localhost:3000");
});