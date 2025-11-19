import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';

const Sidebar = () => {
    const [activeSection, setActiveSection] = useState('');

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            let current = '';

            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= sectionTop - 200) {
                    current = section.getAttribute('id');
                }
            });

            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Experience', href: '#experience' },
        { name: 'Projects', href: '#projects' },
    ];

    return (
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
            <div>
                <h1 className="text-4xl font-bold tracking-tight text-heading sm:text-5xl">
                    <a href="/">Brittany Chiang</a>
                </h1>
                <h2 className="mt-3 text-lg font-medium tracking-tight text-heading sm:text-xl">
                    Senior Frontend Engineer
                </h2>
                <p className="mt-4 max-w-xs leading-normal text-text">
                    I build pixel-perfect, engaging, and accessible digital experiences.
                </p>
                <nav className="nav hidden lg:block" aria-label="In-page jump links">
                    <ul className="mt-16 w-max">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    className={`group flex items-center py-3 ${activeSection === link.href.substring(1) ? 'active' : ''}`}
                                    href={link.href}
                                >
                                    <span className={`nav-indicator mr-4 h-px w-8 bg-slate transition-all group-hover:w-16 group-hover:bg-heading group-focus-visible:w-16 group-focus-visible:bg-heading motion-reduce:transition-none ${activeSection === link.href.substring(1) ? 'w-16 bg-heading' : ''}`}></span>
                                    <span className={`nav-text text-xs font-bold uppercase tracking-widest text-slate group-hover:text-heading group-focus-visible:text-heading ${activeSection === link.href.substring(1) ? 'text-heading' : ''}`}>
                                        {link.name}
                                    </span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
            <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
                <li className="mr-5 text-xs">
                    <a className="block hover:text-heading" href="https://github.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">GitHub</span>
                        <Github className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-heading" href="https://linkedin.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">LinkedIn</span>
                        <Linkedin className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-heading" href="https://instagram.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Instagram</span>
                        <Instagram className="h-6 w-6" />
                    </a>
                </li>
                <li className="mr-5 text-xs">
                    <a className="block hover:text-heading" href="https://twitter.com" target="_blank" rel="noreferrer">
                        <span className="sr-only">Twitter</span>
                        <Twitter className="h-6 w-6" />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Sidebar;
