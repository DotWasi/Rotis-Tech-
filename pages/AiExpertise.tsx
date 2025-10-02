import React, { useState, useCallback } from 'react';
import { generateAiInsight, generateAiImage } from '../services/geminiService';

const SkillCard = ({ title, description }: { title: string, description: string }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-lg font-bold text-brand-secondary mb-2">{title}</h3>
        <p className="text-gray-400 text-sm">{description}</p>
    </div>
);

const AiExpertise = () => {
    // States for text insight generation
    const [prompt, setPrompt] = useState('predictive analytics for restaurant inventory');
    const [insight, setInsight] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    
    // States for image generation
    const [imagePrompt, setImagePrompt] = useState('an autonomous robot chef in a futuristic kitchen');
    const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
    const [imageLoading, setImageLoading] = useState(false);
    const [imageError, setImageError] = useState<string | null>(null);


    const handleGenerateInsight = useCallback(async () => {
        if (!prompt) {
            setError('Please enter a topic.');
            return;
        }
        setLoading(true);
        setError(null);
        setInsight('');
        try {
            const result = await generateAiInsight(prompt);
            setInsight(result);
        } catch (err) {
            setError('Failed to generate insight. Please check your API key and try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    }, [prompt]);
    
    const handleGenerateImage = useCallback(async () => {
        if (!imagePrompt) {
            setImageError('Please enter a description for the image.');
            return;
        }
        setImageLoading(true);
        setImageError(null);
        setGeneratedImageUrl(null);
        try {
            const resultUrl = await generateAiImage(imagePrompt);
            setGeneratedImageUrl(resultUrl);
        } catch (err) {
            setImageError('Failed to generate image. Please check your API key and try again.');
            console.error(err);
        } finally {
            setImageLoading(false);
        }
    }, [imagePrompt]);

    return (
        <div className="animate-fade-in-up space-y-24">
            <div>
                <h1 className="text-4xl font-extrabold text-center mb-4 text-white">AI & Advanced Skills</h1>
                <p className="text-center text-lg text-brand-primary mb-12">Pioneering the Next Generation of Automation</p>

                <div className="grid md:grid-cols-2 gap-8">
                    <SkillCard 
                        title="Predictive Analytics & Risk Forecasting"
                        description="Applying predictive models to ROTIS data to forecast delays, cost overruns, and resource needs, turning risk management from a reactive to a proactive process."
                    />
                    <SkillCard 
                        title="Agentic AI & Workflow Automation"
                        description="Developing autonomous virtual 'agents' that manage tasks and update systems without human input, directly aligning with ROTIS's goal of a human-free operational environment."
                    />
                    <SkillCard 
                        title="Intelligent Resource Optimization"
                        description="Using AI to dynamically assign automated tasks based on real-time workload and operational priorities, ensuring maximum efficiency and throughput."
                    />
                    <SkillCard 
                        title="NLP-based Risk Identification"
                        description="Leveraging Natural Language Processing to analyze operational data and communications, identifying potential risks and anomalies before they escalate."
                    />
                </div>
            </div>
            
            <section className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Explore AI in Hospitality (Text)</h2>
                <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
                    Enter a topic below to generate AI-powered insights on how advanced technology can be applied to the hospitality industry.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input 
                        type="text"
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        placeholder="e.g., AI for customer service"
                        className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        disabled={loading}
                    />
                    <button 
                        onClick={handleGenerateInsight}
                        disabled={loading}
                        className="px-6 py-2 bg-brand-primary text-white font-semibold rounded-md hover:bg-sky-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {loading ? 'Generating...' : 'Generate Insight'}
                    </button>
                </div>
                {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
                
                {insight && (
                    <div className="mt-6 p-6 bg-gray-900 rounded-md border border-gray-700">
                        <h4 className="text-lg font-semibold text-white mb-2">Generated Insight:</h4>
                        <p className="text-gray-300 whitespace-pre-wrap">{insight}</p>
                    </div>
                )}
            </section>
            
            <section className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">AI-Powered Image Generation (Imagen 4.0)</h2>
                <p className="text-center text-gray-400 mb-6 max-w-2xl mx-auto">
                    Describe a scene or concept related to technology and hospitality to create a unique, AI-generated image.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-4">
                    <input 
                        type="text"
                        value={imagePrompt}
                        onChange={(e) => setImagePrompt(e.target.value)}
                        placeholder="e.g., a robot serving glowing food"
                        className="flex-grow bg-gray-900 border border-gray-600 rounded-md px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary"
                        disabled={imageLoading}
                    />
                    <button 
                        onClick={handleGenerateImage}
                        disabled={imageLoading}
                        className="px-6 py-2 bg-brand-secondary text-white font-semibold rounded-md hover:bg-teal-500 disabled:bg-gray-500 disabled:cursor-not-allowed transition-colors"
                    >
                        {imageLoading ? 'Generating...' : 'Generate Image'}
                    </button>
                </div>
                {imageError && <p className="text-red-500 text-sm text-center mb-4">{imageError}</p>}
                
                <div className="mt-6 flex justify-center items-center h-80 bg-gray-900/50 rounded-md border border-gray-700 overflow-hidden">
                    {imageLoading ? (
                        <div className="text-center text-gray-400">
                            <svg className="animate-spin h-8 w-8 text-brand-primary mx-auto mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Generating image...
                        </div>
                    ) : generatedImageUrl ? (
                        <img src={generatedImageUrl} alt="AI Generated" className="w-full h-full object-cover" />
                    ) : (
                        <p className="text-gray-500">Image will appear here</p>
                    )}
                </div>
            </section>
        </div>
    );
};

export default AiExpertise;