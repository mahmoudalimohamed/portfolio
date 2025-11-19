import React from 'react';

const Hero = () => {
    return (
        <section id="hero" className="min-h-screen flex flex-col justify-center items-start max-w-[1000px] mx-auto px-0">
            <h1 className="text-green font-mono text-sm md:text-base mb-5 ml-1">Hi, my name is</h1>
            <h2 className="text-lightest-slate text-4xl md:text-7xl font-bold mb-4 tracking-tight">
                Brittany Chiang.
            </h2>
            <h3 className="text-slate text-4xl md:text-7xl font-bold mb-8 tracking-tight">
                I build things for the web.
            </h3>
            <p className="text-slate max-w-[540px] text-lg md:text-xl leading-relaxed mb-12">
                I'm a software engineer specializing in building (and occasionally designing) exceptional digital experiences. Currently, I'm focused on building accessible, human-centered products at <a href="https://upstatement.com/" target="_blank" rel="noreferrer" className="text-green hover:underline">Upstatement</a>.
            </p>
            <a
                href="https://github.com/bchiang7"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-colors"
            >
                Check out my course!
            </a>
        </section>
    );
};

export default Hero;
