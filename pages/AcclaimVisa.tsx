import React from 'react';

const SkillBar = ({ skill, level }: { skill: string, level: string }) => (
    <div>
        <div className="flex justify-between mb-1">
            <span className="text-base font-medium text-gray-300">{skill}</span>
        </div>
        <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div className="bg-brand-primary h-2.5 rounded-full" style={{ width: level }}></div>
        </div>
    </div>
);

const TimelineItem = ({ date, title, company, description, isLast = false }: { date: string, title: string, company: string, description: string, isLast?: boolean }) => (
    <li className={!isLast ? "mb-10 ml-6" : "ml-6"}>            
        <span className="absolute flex items-center justify-center w-6 h-6 bg-brand-primary rounded-full -left-3 ring-8 ring-gray-800">
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd"></path></svg>
        </span>
        <h3 className="flex items-center mb-1 text-lg font-semibold text-white">{title} <span className="text-brand-secondary text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3">{company}</span></h3>
        <time className="block mb-2 text-sm font-normal leading-none text-gray-500">{date}</time>
        <p className="mb-4 text-base font-normal text-gray-400">{description}</p>
    </li>
);

const DocumentLinkCard = ({ title, description, fileUrl }: { title: string, description: string, fileUrl: string }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg shadow-lg border border-gray-700 text-center flex flex-col items-center">
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 mb-6 flex-grow">{description}</p>
        <a 
            href={fileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full mt-auto bg-brand-secondary/80 text-white font-semibold py-2 px-4 rounded-md hover:bg-brand-secondary transition-colors duration-300 flex items-center justify-center gap-2"
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.022 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
            </svg>
            View Document
        </a>
    </div>
);


const AcclaimVisa = () => {
    return (
        <div className="animate-fade-in-up space-y-20">
             <div className="text-center">
                <h1 className="text-4xl font-extrabold text-white">Digital Dossier & Curriculum Vitae</h1>
                <p className="text-lg text-brand-primary mt-2">A comprehensive overview of my professional journey, skills, and qualifications.</p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <section>
                        <h2 className="text-3xl font-bold text-brand-secondary mb-8">Professional Experience</h2>
                        <ol className="relative border-l border-gray-700">                  
                            <TimelineItem
                                date="August 2020 - Present"
                                title="Founder, IT Manager & Lead Project Architect"
                                company="Rotis Tech (Private) Limited"
                                description="Conceptualized and founded Rotis Tech, leading the architecture and project management of the flagship ROTIS platform. Responsible for the entire SDLC, from market analysis and technical stack selection to team leadership and client trials."
                            />
                             <TimelineItem
                                date="January 2018 - July 2020"
                                title="Senior Software Engineer"
                                company="Innovate Solutions Inc."
                                description="Led a team in developing enterprise-level software solutions. Specialized in backend development using PHP/Laravel and database optimization, contributing to a 20% increase in application performance."
                            />
                            <TimelineItem
                                date="June 2015 - December 2017"
                                title="Software Developer"
                                company="TechCrafters Co."
                                description="Developed and maintained web applications for various clients. Gained extensive experience in full-stack development, database management, and agile methodologies."
                                isLast
                            />
                        </ol>
                    </section>
                    
                    <section className="mt-16">
                        <h2 className="text-3xl font-bold text-brand-secondary mb-8">Education & Certifications</h2>
                        <ol className="relative border-l border-gray-700">                  
                            <TimelineItem
                                date="2015"
                                title="Master of Science in Computer Science"
                                company="University of Engineering & Technology"
                                description="Specialized in software engineering and artificial intelligence. Thesis focused on machine learning models for predictive analysis in business environments."
                            />
                             <TimelineItem
                                date="2013"
                                title="Bachelor of Science in Software Engineering"
                                company="National University of Computer Sciences"
                                description="Graduated with honors. Final year project involved developing a custom CRM system for a local business."
                                isLast
                            />
                        </ol>
                    </section>
                </div>
                
                <aside>
                    <section className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700 mb-12">
                        <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Skills & Expertise</h2>
                        <div className="space-y-4">
                            <SkillBar skill="Project Management (Agile/Scrum)" level="95%" />
                            <SkillBar skill="Laravel & PHP Development" level="98%" />
                            <SkillBar skill="SQL Server / SQL Lite" level="90%" />
                            <SkillBar skill="Cloud Architecture (AWS)" level="85%" />
                            <SkillBar skill="AI & Predictive Analytics" level="80%" />
                            <SkillBar skill="DevOps (Docker, CI/CD)" level="75%" />
                        </div>
                    </section>
                    
                    <section className="bg-gray-800/50 p-8 rounded-lg shadow-xl border border-gray-700">
                        <h2 className="text-2xl font-bold text-brand-secondary mb-6 text-center">Verification Hub</h2>
                        <div className="space-y-6">
                            <DocumentLinkCard
                                title="Experience Certificate"
                                description="Official document verifying my roles, responsibilities, and achievements."
                                fileUrl="./public/experience_certificate.pdf"
                            />
                             <DocumentLinkCard
                                title="Educational Transcripts"
                                description="Academic records from my Master's and Bachelor's degree programs."
                                fileUrl="./public/educational_transcripts.pdf"
                            />
                            <DocumentLinkCard
                                title="Professional Certifications"
                                description="View certifications in project management and cloud computing."
                                fileUrl="./public/professional_certifications.pdf"
                            />
                             <a 
                                href="./public/Usman-Yasin-CV.pdf"
                                download="Usman-Yasin-CV.pdf"
                                className="w-full block mt-8 bg-brand-primary text-white text-center font-semibold py-3 px-4 rounded-md hover:bg-sky-500 transition-colors duration-300 flex items-center justify-center gap-2"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>
                                Download Full CV (PDF)
                            </a>
                        </div>
                    </section>
                </aside>
            </div>
        </div>
    );
};

export default AcclaimVisa;