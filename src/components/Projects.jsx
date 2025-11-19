import React from 'react';
import { Github, ExternalLink } from 'lucide-react';

const Projects = () => {
    const featuredProjects = [
        {
            title: 'Halcyon Theme',
            description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
            tech: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
            github: 'https://github.com/bchiang7/halcyon-vscode',
            external: 'https://halcyon-theme.netlify.app/',
            image: 'https://v4.brittanychiang.com/content/featured/Halcyon/halcyon.png'
        },
        {
            title: 'Spotify Profile',
            description: 'A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing playlists and more.',
            tech: ['React', 'Styled Components', 'Express', 'Spotify API', 'Heroku'],
            github: 'https://github.com/bchiang7/spotify-profile',
            external: 'https://spotify-profile.herokuapp.com/',
            image: 'https://v4.brittanychiang.com/content/featured/SpotifyProfile/spotify-profile.png'
        },
        {
            title: 'Build a Spotify Connected App',
            description: 'Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. This course covers everything you need to know to build a web app with the Spotify Web API.',
            tech: ['React', 'Express', 'Spotify API', 'Styled Components'],
            github: '',
            external: 'https://www.newline.co/courses/build-a-spotify-connected-app',
            image: 'https://v4.brittanychiang.com/content/featured/SpotifyCourse/course-card.png'
        }
    ];

    return (
        <div className="max-w-[1000px] mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-green font-mono text-xl mr-2">03.</span>
                <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">Some Things I've Built</h2>
                <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[300px]"></div>
            </div>

            <ul className="flex flex-col gap-24">
                {featuredProjects.map((project, index) => (
                    <li key={index} className="relative grid grid-cols-12 items-center gap-2">
                        {/* Project Image */}
                        <div className={`col-span-12 md:col-span-7 relative h-full ${index % 2 === 0 ? 'md:col-start-1' : 'md:col-start-6'}`}>
                            <a href={project.external} target="_blank" rel="noreferrer" className="w-full block h-full relative rounded bg-green hover:bg-transparent transition-colors duration-300 group">
                                <div className="absolute inset-0 bg-navy mix-blend-screen hover:mix-blend-normal transition-all duration-300 rounded"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="rounded w-full h-full object-cover mix-blend-multiply hover:mix-blend-normal filter grayscale hover:grayscale-0 transition-all duration-300"
                                />
                            </a>
                        </div>

                        {/* Project Content */}
                        <div className={`col-span-12 md:col-span-6 relative z-10 ${index % 2 === 0 ? 'md:col-start-7 md:text-right' : 'md:col-start-1 md:row-start-1 text-left'}`}>
                            <p className="font-mono text-green text-sm mb-2">Featured Project</p>
                            <h3 className="text-lightest-slate text-2xl font-bold mb-5">
                                <a href={project.external} target="_blank" rel="noreferrer" className="hover:text-green transition-colors">{project.title}</a>
                            </h3>

                            <div className={`bg-light-navy p-6 rounded shadow-xl text-light-slate text-sm mb-5 hover:shadow-2xl transition-shadow ${index % 2 === 0 ? 'md:ml-[-50px]' : 'md:mr-[-50px]'}`}>
                                <p>{project.description}</p>
                            </div>

                            <ul className={`flex flex-wrap gap-4 text-slate font-mono text-xs mb-8 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                {project.tech.map(tech => <li key={tech}>{tech}</li>)}
                            </ul>

                            <div className={`flex items-center gap-4 ${index % 2 === 0 ? 'md:justify-end' : 'justify-start'}`}>
                                {project.github && (
                                    <a href={project.github} target="_blank" rel="noreferrer" className="text-slate hover:text-green transition-colors">
                                        <Github className="w-5 h-5" />
                                    </a>
                                )}
                                {project.external && (
                                    <a href={project.external} target="_blank" rel="noreferrer" className="text-slate hover:text-green transition-colors">
                                        <ExternalLink className="w-5 h-5" />
                                    </a>
                                )}
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Projects;
