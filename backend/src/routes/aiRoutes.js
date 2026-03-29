const express = require('express');
const router = express.Router();
const { getChatResponse } = require('../services/groqService');

router.post('/chat', async (req, res) => {
    try {
        const { message } = req.body;
        if (!message) return res.status(400).json({ error: "Message is required." });
        
        const response = await getChatResponse(message);
        res.json({ reply: response });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
