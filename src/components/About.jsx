import React from 'react';

const About = () => {
    return (
        <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24" aria-label="About me">
            <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-background/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
                <h2 className="text-sm font-bold uppercase tracking-widest text-heading lg:sr-only">About</h2>
            </div>
            <div>
                <p className="mb-4 text-text">
                    Back in 2012, I decided to try my hand at creating custom Tumblr themes and tumbled head first into the rabbit hole of coding and web development. Fast-forward to today, and I’ve had the privilege of building software for an <a className="font-medium text-heading hover:text-accent focus-visible:text-accent" href="#">advertising agency</a>, a <a className="font-medium text-heading hover:text-accent focus-visible:text-accent" href="#">start-up</a>, a <a className="font-medium text-heading hover:text-accent focus-visible:text-accent" href="#">huge corporation</a>, and a <a className="font-medium text-heading hover:text-accent focus-visible:text-accent" href="#">digital product studio</a>.
                </p>
                <p className="mb-4 text-text">
                    My main focus these days is building accessible, inclusive products and digital experiences at <a className="font-medium text-heading hover:text-accent focus-visible:text-accent" href="#">Upstatement</a> for a variety of clients.
                </p>
                <p className="mb-4 text-text">
                    I also recently launched a course that covers everything you need to build a web app with the Spotify API using Node & React.
                </p>
                <p className="text-text">
                    When I’m not at the computer, I’m usually hanging out with my wife and two cats, reading, or running around Hyrule searching for Korok seeds.
                </p>
            </div>
        </section>
    );
};

export default About;
