import React from 'react';
import { NavLink } from 'react-router-dom';

const services = [
    {
        title: "Hospitality Automation (ROTIS)",
        description: "Our flagship service, specializing in the end-to-end automation of hospitality operations. We deploy intelligent systems like ROTIS to streamline workflows, reduce operational costs, and elevate the guest experience.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h6M9 11.25h6M9 15.75h6" /></svg>,
        image: "https://images.unsplash.com/photo-1677442135753-194275459c36?q=80&w=1920&auto=format&fit=crop",
        features: ["AI-Powered Order Management", "Automated Inventory Control", "Real-time Analytics Dashboard", "Contactless Guest Services"]
    },
    {
        title: "AI-Powered Predictive Analytics",
        description: "Unlock the power of your data. We build and integrate predictive models that forecast business trends, anticipate customer behavior, and optimize inventory, turning historical data into actionable, strategic insights.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /></svg>,
        image: "https://images.unsplash.com/photo-1634017835447-35515b0a3f5a?q=80&w=1920&auto=format&fit=crop",
        features: ["Demand Forecasting", "Customer Churn Prediction", "Price Optimization", "Supply Chain Analytics"]
    },
    {
        title: "Agentic AI & Autonomous Operations",
        description: "Pioneering the next frontier of automation with Agentic AI. We design and deploy autonomous 'digital workers' to handle complex, multi-step processes, creating a truly intelligent and self-sufficient operational environment.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.25 3v1.5M4.5 8.25H3m18 0h-1.5M4.5 12H3m18 0h-1.5m-15 3.75H3m18 0h-1.5M8.25 21v-1.5M15.75 3v1.5M19.5 8.25H21M19.5 12H21M19.5 15.75H21M15.75 21v-1.5M12 4.5v15" /></svg>,
        image: "https://images.unsplash.com/photo-1688509930429-e09d18413a4a?q=80&w=1920&auto=format&fit=crop",
        features: ["Automated Customer Support", "Intelligent Document Processing", "Autonomous Task Delegation", "Proactive System Monitoring"]
    },
    {
        title: "Cloud Architecture & Integration",
        description: "We architect, build, and manage scalable, secure, and cost-efficient cloud infrastructures. From cloud-native application development to seamless migration, we ensure your business harnesses the full potential of the cloud.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" /></svg>,
        image: "https://images.unsplash.com/photo-1614064548237-02f1f1d0b31e?q=80&w=1920&auto=format&fit=crop",
        features: ["Multi-Cloud Strategy", "Serverless Architecture", "Data Warehousing", "Cloud Security & Governance"]
    },
    {
        title: "Custom Software Development",
        description: "Building bespoke software solutions tailored to your unique business challenges. We manage the full Software Development Lifecycle (SDLC), from ideation and UX/UI design to deployment and ongoing support.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>,
        image: "https://images.unsplash.com/photo-1620207412836-e7e5a3c43a05?q=80&w=1920&auto=format&fit=crop",
        features: ["Web & Mobile Applications", "Enterprise Software", "API Development & Integration", "Legacy System Modernization"]
    },
    {
        title: "DevOps & CI/CD Automation",
        description: "Accelerate your time-to-market with modern DevOps practices. We implement automated CI/CD pipelines, infrastructure as code, and robust monitoring to increase development velocity and improve software quality.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.667 0l3.181-3.183m-4.991-2.691V5.006h-4.992v4.992h4.992z" /></svg>,
        image: "https://images.unsplash.com/photo-1655721533533-c1f4a9295325?q=80&w=1920&auto=format&fit=crop",
        features: ["Automated Build & Deployment", "Infrastructure as Code (IaC)", "Containerization (Docker, Kubernetes)", "Performance Monitoring & Logging"]
    },
     {
        title: "Strategic IT Consulting",
        description: "Leverage our expertise to align your technology roadmap with your business goals. We provide high-level guidance on digital transformation, IT governance, and emerging technologies to ensure a future-proof strategy.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>,
        image: "https://images.unsplash.com/photo-1677756119517-756a188d2278?q=80&w=1920&auto=format&fit=crop",
        features: ["Digital Transformation Roadmap", "Technology Stack Evaluation", "IT Budget & Cost Optimization", "Vendor Management"]
    },
    {
        title: "Cybersecurity & Compliance",
        description: "Protect your digital assets with our comprehensive cybersecurity services. We conduct vulnerability assessments, implement robust security protocols, and ensure your operations are compliant with industry standards like GDPR.",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286z" /></svg>,
        image: "https://images.unsplash.com/photo-1584988351980-35360f25c786?q=80&w=1920&auto=format&fit=crop",
        features: ["Security Audits", "Threat Intelligence", "Data Encryption & Privacy", "Employee Security Training"]
    }
];

const ServiceCard = ({ service, index }: { service: any, index: number }) => {
    const isReversed = index % 2 !== 0;
    return (
        <div className={`bg-gray-800/50 rounded-xl shadow-2xl overflow-hidden border border-gray-700/50 flex flex-col lg:flex-row ${isReversed ? 'lg:flex-row-reverse' : ''}`}>
            <div className="lg:w-1/2">
                <img src={service.image} alt={service.title} className="w-full h-64 lg:h-full object-cover object-center" />
            </div>
            <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <div className="flex items-center gap-4 mb-4">
                    <span className="text-brand-primary flex-shrink-0">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{service.description}</p>
                <div>
                    <h4 className="font-semibold text-brand-secondary mb-3">Key Features:</h4>
                    <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm text-gray-400">
                        {service.features.map((feature: string) => (
                            <li key={feature} className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-brand-primary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

const CoreServices = () => {
    return (
        <div className="animate-fade-in-up">
            <div className="text-center mb-20">
                <h1 className="text-4xl md:text-5xl font-extrabold text-white">Our Technology Services</h1>
                <p className="mt-4 max-w-2xl mx-auto text-lg text-brand-primary">
                    Delivering the building blocks for the Fourth Industrial Revolution.
                </p>
            </div>

            <div className="space-y-16">
                {services.map((service, index) => (
                    <ServiceCard key={service.title} service={service} index={index} />
                ))}
            </div>

            <section className="mt-24 text-center bg-gray-800/50 py-16 px-8 rounded-xl border border-brand-primary/20 shadow-xl">
                 <h2 className="text-3xl font-bold text-white mb-4">Ready to Revolutionize Your Business?</h2>
                 <p className="text-gray-300 max-w-2xl mx-auto mb-8">
                     Let's discuss how our advanced technology solutions can be tailored to meet your unique challenges and drive your business forward.
                 </p>
                 <NavLink 
                    to="/contact"
                    className="inline-block px-10 py-4 text-lg font-semibold text-white bg-brand-primary rounded-lg hover:bg-sky-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                    Schedule a Consultation
                </NavLink>
            </section>
        </div>
    );
};

export default CoreServices;