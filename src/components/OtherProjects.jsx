import React, { useState } from "react";
import { Github, ExternalLink, Folder } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
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

const OtherProjects = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });
  const [showAll, setShowAll] = useState(false);

  const allProjects = [
    {
      title: "Integrating Algolia Search with WordPress Multisite",
      description:
        "Building a custom multisite compatible WordPress plugin to build global search with Algolia",
      tech: ["Algolia", "WordPress", "PHP"],
      github: "",
      external: "#",
    },
    {
      title: "Time to Have More Fun",
      description:
        "A single page web app for helping me choose where to travel, built with Next.js, Firebase, and Tailwind CSS",
      tech: ["Next.js", "Tailwind CSS", "Firebase"],
      github: "#",
      external: "",
    },
    {
      title: "Building a Headless Mobile App CMS From Scratch",
      description:
        "Find out how we built a custom headless CMS with Node, Express, and Firebase for a project at Upstatement",
      tech: ["Node", "Express", "Firebase", "Vue"],
      github: "",
      external: "#",
    },
    {
      title: "OctoProfile",
      description:
        "A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.",
      tech: ["Next.js", "Chart.js", "GitHub API"],
      github: "#",
      external: "",
    },
    {
      title: "Google Keep Clone",
      description: "A simple Google Keep clone built with Vue and Firebase.",
      tech: ["Vue", "Firebase"],
      github: "",
      external: "#",
    },
    {
      title: "Apple Music Embeddable Web Player Widget",
      description:
        "Embeddable web player widget for Apple Music that lets users log in and listen to full song playback in the browser leveraging MusicKit.js. Read more about this project on 9to5Mac.",
      tech: ["MusicKit.js", "JS", "SCSS"],
      github: "",
      external: "#",
    },
  ];

  const displayedProjects = showAll ? allProjects : allProjects.slice(0, 6);

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-[1200px] mx-auto px-6 pt-20 pb-8"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h2 className="text-lightest-slate text-3xl md:text-4xl font-bold mb-3">
          Other Noteworthy Projects
        </h2>
        <a href="#" className="text-green text-sm hover:underline inline-block">
          view the archive
        </a>
      </motion.div>

      <motion.div
        variants={containerVariants}
        className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mb-12"
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="bg-light-navy p-3 md:p-6 rounded-lg h-full flex flex-col group hover:-translate-y-1 transition-transform duration-300"
          >
            <div className="flex items-start justify-between mb-2 md:mb-4">
              <Folder className="w-5 h-5 md:w-8 md:h-8 text-green flex-shrink-0" />
              <div className="flex items-center gap-2 md:gap-3">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate hover:text-green transition-colors"
                  >
                    <Github className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
                {project.external && (
                  <a
                    href={project.external}
                    target="_blank"
                    rel="noreferrer"
                    className="text-slate hover:text-green transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                  </a>
                )}
              </div>
            </div>

            <h3 className="text-lightest-slate text-sm md:text-xl font-bold mb-2 md:mb-3 group-hover:text-green transition-colors">
              <a
                href={project.external || project.github || "#"}
                target={
                  project.external || project.github ? "_blank" : undefined
                }
                rel={
                  project.external || project.github ? "noreferrer" : undefined
                }
                className="hover:text-green transition-colors"
              >
                {project.title}
              </a>
            </h3>

            <p className="text-slate text-xs md:text-sm leading-relaxed mb-3 md:mb-5 flex-grow">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-1.5 md:gap-3 text-slate font-mono text-[10px] md:text-xs mt-auto">
              {project.tech.map((tech, techIndex) => (
                <li key={techIndex}>{tech}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      {!showAll && allProjects.length > 6 && (
        <motion.div variants={itemVariants} className="text-center">
          <button
            onClick={() => setShowAll(true)}
            className="px-8 py-3 border border-green text-green bg-transparent rounded hover:bg-green/10 transition-colors font-mono text-sm"
          >
            Show More
          </button>
        </motion.div>
      )}
    </motion.div>
  );
};

export default OtherProjects;
