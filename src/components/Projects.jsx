import React from 'react';

const Projects = () => {
    const projects = [
        {
            title: 'Build a Spotify Connected App',
            description: 'Video course that teaches how to build a web app with the Spotify Web API. Topics covered include the principles of REST APIs, user auth flows, Node, Express, React, Styled Components, and more.',
            image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fcourse-card.png&w=256&q=75',
            link: 'https://www.newline.co/courses/build-a-spotify-connected-app',
            tags: ['React', 'Express', 'Spotify API', 'Styled Components']
        },
        {
            title: 'Spotify Profile',
            description: 'Web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fspotify-profile.png&w=256&q=75',
            link: 'https://spotify-profile.herokuapp.com/',
            tags: ['React', 'Express', 'Spotify API', 'Heroku']
        },
        {
            title: 'Halcyon Theme',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            image: 'https://brittanychiang.com/_next/image?url=%2Fimages%2Fprojects%2Fhalcyon.png&w=256&q=75',
            link: 'https://halcyon-theme.netlify.app/',
            tags: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper']
        }
    ];

    return (
        <section id="projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="Selected projects">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">Projects</h2>
            </div>
            <div>
                <ul className="group/list">
                    {projects.map((project, index) => (
                        <li key={index} className="mb-12">
                            <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                                <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-light-navy/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                                <div className="z-10 sm:order-2 sm:col-span-6">
                                    <h3>
                                        <a className="inline-flex items-baseline font-medium leading-tight text-heading hover:text-accent focus-visible:text-accent group/link text-base" href={project.link} target="_blank" rel="noreferrer" aria-label={project.title}>
                                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                                            <span>{project.title}</span>
                                        </a>
                                    </h3>
                                    <p className="mt-2 text-sm leading-normal text-text">
                                        {project.description}
                                    </p>
                                    <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
                                        {project.tags.map((tag) => (
                                            <li key={tag} className="mr-1.5 mt-2">
                                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-accent">
                                                    {tag}
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="z-10 sm:order-1 sm:col-span-2">
                                    {/* Placeholder for image if needed, or just keep text layout */}
                                    <div className="rounded border-2 border-lightest-slate/10 transition group-hover:border-lightest-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="rounded border border-lightest-slate/10 transition group-hover:border-lightest-slate/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                                            loading="lazy"
                                            width="200"
                                            height="48"
                                        />
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default Projects;
