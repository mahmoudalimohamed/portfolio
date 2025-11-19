import React from 'react';

const Experience = () => {
    const jobs = [
        {
            date: '2024 — Present',
            title: 'Senior Frontend Engineer',
            company: 'Klaviyo',
            description: 'Building world-class digital experiences.',
            skills: ['React', 'TypeScript', 'Tailwind CSS'],
            link: 'https://klaviyo.com'
        },
        {
            date: '2018 — 2024',
            title: 'Lead Engineer',
            company: 'Upstatement',
            description: 'Built and delivered technical solutions for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more.',
            skills: ['React', 'Next.js', 'GraphCMS'],
            link: 'https://upstatement.com'
        },
        {
            date: 'JULY — DEC 2017',
            title: 'UI Engineer Co-op',
            company: 'Apple',
            description: 'Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for third-party websites.',
            skills: ['Ember', 'SCSS', 'JavaScript'],
            link: 'https://apple.com'
        }
    ];

    return (
        <section id="experience" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Work experience">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Experience</h2>
            </div>
            <div>
                <ol className="group/list">
                    {jobs.map((job, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <header className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate sm:col-span-2" aria-label={job.date}>
                                    {job.date}
                                </header>
                                <div className="z-10 sm:col-span-6">
                                    <h3 className="font-medium leading-snug text-heading">
                                        <div>
                                            <a className="inline-flex items-baseline font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent group/link text-base" href={job.link} target="_blank" rel="noreferrer" aria-label={`${job.title} at ${job.company}`}>
                                                <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                                <span>
                                                    {job.title} · <span className="inline-block">{job.company}</span>
                                                </span>
                                            </a>
                                        </div>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-text">
                                        {job.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {job.skills.map((skill) => (
                                            <li key={skill} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                                                    {skill}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </li>
                    ))}
                </ol>
                <div className="mt-12">
                    <a className="inline-flex items-baseline font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent font-semibold text-slate-200 group/link text-base" href="/resume.pdf" target="_blank" rel="noreferrer">
                        <span>View Full Résumé</span>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Experience;
