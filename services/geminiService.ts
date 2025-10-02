import { GoogleGenAI } from "@google/genai";

// IMPORTANT: PASTE YOUR GEMINI API KEY HERE
// This key is necessary for the AI features on the "AI Expertise" page to work.
// Get your free key from Google AI Studio: https://aistudio.google.com/
const apiKey = "YOUR_GEMINI_API_KEY_HERE";

// Check if the API key has been replaced
if (!apiKey || apiKey === "YOUR_GEMINI_API_KEY_HERE") {
    console.warn("Gemini API key not found. Please paste your key in services/geminiService.ts for AI features to work.");
}

// Initialize the AI client only if the key is valid
const ai = (apiKey && apiKey !== "YOUR_GEMINI_API_KEY_HERE") ? new GoogleGenAI({ apiKey }) : null;

export const generateAiInsight = async (topic: string): Promise<string> => {
    if (!ai) {
        return Promise.resolve("API Key not configured. This is a demo response. AI insights would appear here, showing how predictive analytics can optimize restaurant inventory by analyzing sales data, seasonality, and local events to reduce waste and prevent stockouts, directly improving profitability.");
    }
    
    try {
        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: `In 3-4 concise sentences, explain how the concept of "${topic}" can be applied to innovate or automate operations in the restaurant industry. Focus on the business value and impact.`,
            config: {
                temperature: 0.7,
                topP: 1,
                topK: 32,
            }
        });
        
        return response.text;
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to generate insight from AI model.");
    }
};

export const generateAiImage = async (prompt: string): Promise<string> => {
    if (!ai) {
        return Promise.resolve("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3Qgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIGZpbGw9IiMwYTBmMWYiLz48dGV4dCB4PSI1MCUiIHk9IjUwJSIgZG9taW5hbnQtYmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjQwIiBmaWxsPSIjZmRmZGZkIj5BSSBJbWFnZSBHZW5lcmF0aW9uPC90ZXh0Pjx0ZXh0IHg9IjUwJSIgeT0iNjAlIiBkb21pbmFudC1-YmFzZWxpbmU9Im1pZGRsZSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZm9udC1mYW1pbHk9InNlcmlmIiBmb250LXNpemU9IjI0IiBmaWxsPSIjOWNhM2FmIj5BUEkgS2V5IE5vdCBDb25maWd1cmVkPC90ZXh0Pjwvc3ZnPg==");
    }

    try {
        const response = await ai.models.generateImages({
            model: 'imagen-4.0-generate-001',
            prompt: `A futuristic, professional, high-resolution, cinematic photograph of: ${prompt}. Tech-inspired aesthetic with deep blues and neon accents.`,
            config: {
                numberOfImages: 1,
                outputMimeType: 'image/jpeg',
                aspectRatio: '1:1',
            },
        });

        const base64ImageBytes = response.generatedImages[0].image.imageBytes;
        return `data:image/jpeg;base64,${base64ImageBytes}`;
    } catch (error) {
        console.error("Error calling Imagen API:", error);
        throw new Error("Failed to generate image from AI model.");
    }
};