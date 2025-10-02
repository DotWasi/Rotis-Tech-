import React from 'react';
import { NavLink } from 'react-router-dom';

const TrialDemo = () => {
    return (
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-4xl font-extrabold text-white">Experience ROTIS Firsthand</h1>
            <p className="text-lg text-brand-primary mt-2 mb-8">Request Your Operational Prototype Trial</p>
            
            <div className="bg-gray-800/50 p-10 rounded-lg shadow-xl border border-gray-700">
                <h2 className="text-2xl font-bold text-brand-secondary mb-4">Stage 1 is Ready for Deployment</h2>
                <p className="text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
                    We are pleased to announce that the first stage of the ROTIS project is complete and ready to provide value to clients. The current prototype is fully operational and available for a comprehensive trial period.
                </p>
                
                <div className="bg-brand-primary/10 border-2 border-dashed border-brand-primary p-6 rounded-lg inline-block mb-8">
                    <p className="text-2xl font-bold text-white">
                        <span className="text-4xl">5 to 7-Day</span>
                        <br/>
                        Operational Trial Period
                    </p>
                </div>

                <p className="text-gray-400 text-sm max-w-xl mx-auto mb-8">
                    NOTE: To ensure a successful market entry, we have consulted with experts in marketing strategy and pricing. This strategic approach underpins our trial offering and future commercial rollout.
                </p>

                <NavLink 
                    to="/contact"
                    className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-brand-primary hover:bg-sky-500 transition-transform duration-300 hover:scale-105"
                >
                    Request Your Trial
                </NavLink>
            </div>
        </div>
    );
};

export default TrialDemo;