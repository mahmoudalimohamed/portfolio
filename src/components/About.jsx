import React from 'react';

const About = () => {
    const skills = ['JavaScript (ES6+)', 'TypeScript', 'React', 'Eleventy', 'Node.js', 'WordPress'];

    return (
        <div className="max-w-[900px] mx-auto">
            <div className="flex items-center mb-10">
                <span className="text-green font-mono text-xl mr-2">01.</span>
                <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">About Me</h2>
                <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[300px]"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-2 text-slate text-lg leading-relaxed">
                    <p className="mb-4">
                        Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!
                    </p>
                    <p className="mb-4">
                        Fast-forward to today, and I've had the privilege of working at an <a href="#" className="text-green hover:underline">advertising agency</a>, a <a href="#" className="text-green hover:underline">start-up</a>, a <a href="#" className="text-green hover:underline">huge corporation</a>, and a <a href="#" className="text-green hover:underline">student-led design studio</a>. My main focus these days is building accessible, inclusive products and digital experiences at <a href="#" className="text-green hover:underline">Upstatement</a>.
                    </p>
                    <p className="mb-4">
                        I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                    </p>
                    <p className="mb-4">Here are a few technologies I've been working with recently:</p>
                    <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-5">
                        {skills.map((skill) => (
                            <li key={skill} className="flex items-center before:content-['▹'] before:text-green before:mr-2">
                                {skill}
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="md:col-span-1 relative group">
                    {/* Image Container with Teal Overlay */}
                    <div className="relative w-full max-w-[300px] mx-auto md:mx-0 aspect-square rounded bg-green hover:bg-transparent transition-colors duration-300">
                        <div className="absolute inset-0 bg-navy mix-blend-screen hover:mix-blend-normal transition-all duration-300 rounded"></div>
                        <img
                            src="https://v4.brittanychiang.com/og.png"
                            alt="Profile"
                            className="rounded relative z-10 mix-blend-multiply hover:mix-blend-normal filter grayscale hover:grayscale-0 transition-all duration-300 object-cover w-full h-full translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1"
                        />
                        <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
