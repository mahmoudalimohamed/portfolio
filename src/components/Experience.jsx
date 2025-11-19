import React, { useState } from 'react';

const Experience = () => {
    const [activeTabId, setActiveTabId] = useState(0);

    const jobs = [
        {
            company: 'Upstatement',
            title: 'Lead Engineer',
            range: 'May 2018 - Present',
            url: 'https://upstatement.com',
            duties: [
                'Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more',
                'Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements',
                'Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders',
                'Provide leadership within engineering department through close collaboration with CTO and director of engineering to facilitate knowledge sharing and mentorship'
            ]
        },
        {
            company: 'Scout',
            title: 'Studio Developer',
            range: 'Jan - Apr 2018',
            url: 'https://scout.camd.northeastern.edu',
            duties: [
                'Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community',
                'Built and delivered technical solutions according to stakeholder business requirements'
            ]
        },
        {
            company: 'Apple',
            title: 'UI Engineer Co-op',
            range: 'Jul - Dec 2017',
            url: 'https://apple.com',
            duties: [
                'Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for third-party websites',
                'Collaborated with designers and other engineers to ensure high-quality product delivery'
            ]
        },
        {
            company: 'Scout',
            title: 'Studio Developer',
            range: 'Jan - Jun 2017',
            url: 'https://scout.camd.northeastern.edu',
            duties: [
                'Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an entrepreneurial startup at Northeastern',
                'Helped solidify a brand direction for blistabloc that spans across packaging, the web, and other marketing materials'
            ]
        },
        {
            company: 'Starry',
            title: 'Software Engineer Co-op',
            range: 'Jul - Dec 2016',
            url: 'https://starry.com',
            duties: [
                'Engineered and maintained major features of Starry’s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS',
                'Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station',
                'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps'
            ]
        },
        {
            company: 'MullenLowe',
            title: 'Creative Technologist Co-op',
            range: 'Jul - Dec 2015',
            url: 'https://us.mullenlowe.com',
            duties: [
                'Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery',
                'Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness',
                'Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more'
            ]
        }
    ];

    return (
        <div className="max-w-[700px] mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-green font-mono text-xl mr-2">02.</span>
                <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">Where I've Worked</h2>
                <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[300px]"></div>
            </div>

            <div className="flex flex-col md:flex-row gap-4">
                {/* Tab List */}
                <div className="relative">
                    <div className="flex md:flex-col overflow-x-auto md:overflow-visible border-b md:border-b-0 md:border-l border-lightest-navy w-full md:w-32" role="tablist" aria-label="Job tabs">
                        {jobs.map((job, index) => (
                            <button
                                key={index}
                                id={`tab-${index}`}
                                role="tab"
                                aria-selected={activeTabId === index}
                                aria-controls={`panel-${index}`}
                                tabIndex={activeTabId === index ? 0 : -1}
                                onClick={() => setActiveTabId(index)}
                                className={`px-5 py-3 text-xs font-mono text-left whitespace-nowrap transition-all duration-200 hover:bg-light-navy hover:text-green focus:outline-none
                    ${activeTabId === index ? 'text-green bg-light-navy/50' : 'text-slate'}
                `}
                            >
                                {job.company}
                            </button>
                        ))}
                    </div>
                    {/* Active Tab Indicator */}
                    <div
                        className="absolute bg-green transition-all duration-300 ease-in-out
                    h-[2px] bottom-0 md:bottom-auto md:top-0 md:left-0 md:w-[2px] md:h-[42px]
                "
                        style={{
                            transform: window.innerWidth >= 768
                                ? `translateY(${activeTabId * 42}px)`
                                : `translateX(${activeTabId * 120}px)` // Approximate width for mobile, might need adjustment
                        }}
                    />
                </div>

                {/* Tab Content */}
                <div className="py-2 md:px-4 w-full">
                    {jobs.map((job, index) => (
                        <div
                            key={index}
                            id={`panel-${index}`}
                            role="tabpanel"
                            aria-labelledby={`tab-${index}`}
                            hidden={activeTabId !== index}
                            className="animate-fadeIn"
                        >
                            <h3 className="text-xl font-medium text-lightest-slate mb-1">
                                <span>{job.title}</span>
                                <span className="text-green"> @ <a href={job.url} target="_blank" rel="noreferrer" className="hover:underline">{job.company}</a></span>
                            </h3>
                            <p className="text-sm font-mono text-light-slate mb-5">{job.range}</p>

                            <ul className="text-slate text-lg">
                                {job.duties.map((duty, i) => (
                                    <li key={i} className="relative pl-8 mb-3 before:content-['▹'] before:absolute before:left-0 before:text-green">
                                        {duty}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Experience;
