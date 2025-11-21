import React from "react";
import { Github, ExternalLink } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.6, -0.05, 0.01, 0.99] },
  },
};

const LINKABLE_TERMS = [
  "Visual Studio Marketplace",
  "Package Control",
  "Atom Package Manager",
  "npm",
];

const formatDescription = (description) => {
  return description
    .split(new RegExp(`(${LINKABLE_TERMS.join("|")})`))
    .map((part, i) =>
      LINKABLE_TERMS.includes(part) ? (
        <a
          key={i}
          href={part === "npm" ? "https://www.npmjs.com/" : "#"}
          target={part === "npm" ? "_blank" : undefined}
          rel={part === "npm" ? "noopener noreferrer" : undefined}
          className="text-green hover:underline"
        >
          {part}
        </a>
      ) : (
        <span key={i}>{part}</span>
      )
    );
};

const Projects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const featuredProjects = [
    {
      title: "Halcyon Theme",
      description:
        "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
      tech: ["VS Code", "Sublime Text", "Atom", "iTerm2", "Hyper"],
      github: "https://github.com/bchiang7/halcyon-vscode",
      external: "https://halcyon-theme.netlify.app/",
      image: "/mahmoudalilogo1.png",
    },
    {
      title: "Spotify Profile",
      description:
        "A web app for visualizing personalized Spotify data. View your top artists, top tracks, recently played tracks, and detailed audio information of each track. Create and save new playlists of recommended tracks based on your existing playlists and more.",
      tech: ["React", "Styled Components", "Express", "Spotify API", "Heroku"],
      github: "https://github.com/bchiang7/spotify-profile",
      external: "https://spotify-profile.herokuapp.com/",
      image: "/mahmoudalilogo1.png",
    },
    {
      title: "Build a Spotify Connected App",
      description:
        "Having struggled with understanding how the Spotify OAuth flow works, I made the course I wish I could have had. This course covers everything you need to know to build a web app with the Spotify Web API.",
      tech: ["React", "Express", "Spotify API", "Styled Components"],
      github: "",
      external: "https://www.newline.co/courses/build-a-spotify-connected-app",
      image: "/mahmoudalilogo1.png",
    },
  ];

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-[1200px] mx-auto px-4 md:px-6"
    >
      <motion.div
        variants={itemVariants}
        className="flex items-center mb-12 md:mb-20"
      >
        <span className="text-green font-mono text-lg md:text-xl mr-2">
          03.
        </span>
        <h2 className="text-lightest-slate text-xl md:text-2xl lg:text-3xl font-bold whitespace-nowrap">
          Some Things I've Built
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full ml-3 md:ml-5 max-w-[200px] md:max-w-[300px]"></div>
      </motion.div>

      <ul className="flex flex-col gap-16 md:gap-32">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;
          const imageColStart = isEven ? "md:col-start-1" : "md:col-start-5";
          const contentColStart = isEven
            ? "md:col-start-6 md:text-right"
            : "md:col-start-1 md:text-left";
          const contentAlign = isEven ? "md:items-end" : "items-start";
          const techJustify = isEven
            ? "md:justify-end justify-start"
            : "justify-start";

          return (
            <motion.li key={index} variants={itemVariants} className="relative">
              <div className="grid grid-cols-12 gap-4 md:items-center">
                <div
                  className={`col-span-12 md:col-span-8 relative md:row-start-1 row-start-1 ${imageColStart}`}
                >
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noreferrer"
                    className="block relative group"
                  >
                    <div
                      className="relative rounded overflow-hidden"
                      style={{ aspectRatio: "16/9" }}
                    >
                      <div className="absolute inset-0 bg-navy/50 group-hover:bg-transparent transition-all duration-300 z-10"></div>
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover filter grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-300"
                      />
                    </div>
                  </a>
                </div>

                <div
                  className={`col-span-12 md:col-span-7 relative z-20 md:row-start-1 row-start-2 ${contentColStart} text-left`}
                >
                  <div className={`flex flex-col ${contentAlign}`}>
                    <p className="font-mono text-green text-xs mb-2">
                      Featured Project
                    </p>
                    <h3 className="text-lightest-slate text-2xl md:text-[28px] font-bold mb-4 md:mb-5">
                      <a
                        href={project.external}
                        target="_blank"
                        rel="noreferrer"
                        className="hover:text-green transition-colors"
                      >
                        {project.title}
                      </a>
                    </h3>

                    <div className="bg-light-navy p-4 md:p-6 rounded shadow-2xl text-light-slate text-sm md:text-[15px] leading-relaxed mb-4 md:mb-5 w-full md:max-w-[540px]">
                      <p>{formatDescription(project.description)}</p>
                    </div>

                    <ul
                      className={`flex flex-wrap gap-3 md:gap-4 text-slate font-mono text-xs md:text-[13px] mb-4 md:mb-6 ${techJustify}`}
                    >
                      {project.tech.map((tech) => (
                        <li key={tech}>{tech}</li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-4">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate hover:text-green transition-colors"
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}
                      {project.external && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noreferrer"
                          className="text-slate hover:text-green transition-colors"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.li>
          );
        })}
      </ul>
    </motion.div>
  );
};

export default Projects;
