const Groq = require('groq-sdk');

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY || 'dummy_key' // Added fallback for local bootup without crash
});

const systemPrompt = `You are the Antigravity Assistant, an AI counselor for Antigravity Coaching System.
Your main job is to help students with inquiries about JEE Mains, NEET, and Foundation courses.
Always be polite, concise, and encourage them to book a free counseling session or fill out the inquiry form.
Do not answer anything unrelated to education, coaching, or the institute.`;

exports.getChatResponse = async (userMessage) => {
    try {
        if (!process.env.GROQ_API_KEY) {
            return "Simulated AI Response: Our counselors will help you with this! (Please add GROQ_API_KEY to .env to enable real AI)";
        }
        
        const completion = await groq.chat.completions.create({
            messages: [
                { role: "system", content: systemPrompt },
                { role: "user", content: userMessage }
            ],
            model: "llama3-8b-8192",
            temperature: 0.7,
            max_tokens: 256,
        });
        
        return completion.choices[0]?.message?.content || "I'm having trouble connecting to my brain. Please try again later.";
    } catch (error) {
        console.error("Groq API Error:", error.message);
        throw new Error("AI service unavailable.");
    }
};
