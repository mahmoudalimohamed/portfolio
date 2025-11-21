import React, { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Experience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [indicatorStyle, setIndicatorStyle] = useState({});
  const tabRefs = useRef([]);
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    const updateIndicator = () => {
      if (tabRefs.current[activeTabId]) {
        // Vertical indicator for all screen sizes
        setIndicatorStyle({
          height: "42px",
          width: "2px",
          left: "0",
          top: "0",
          bottom: "auto",
          transform: `translateY(${activeTabId * 42}px)`,
        });
      }
    };

    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [activeTabId]);

  const jobs = [
    {
      company: "Upstatement",
      title: "Lead Engineer",
      range: "May 2018 - Present",
      url: "https://upstatement.com",
      duties: [
        "Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more",
        "Work alongside creative directors to lead the research, development, and architecture of technical solutions to fulfill business requirements",
        "Collaborate with designers, project managers, and other engineers to transform creative concepts into production realities for clients and stakeholders",
        "Provide leadership within engineering department through close collaboration with CTO and director of engineering to facilitate knowledge sharing and mentorship",
      ],
    },
    {
      company: "Scout",
      title: "Studio Developer",
      range: "Jan - Apr 2018",
      url: "https://scout.camd.northeastern.edu",
      duties: [
        "Collaborated with other student designers and engineers on pro-bono projects to create new brands, design systems, and websites for organizations in the community",
        "Built and delivered technical solutions according to stakeholder business requirements",
      ],
    },
    {
      company: "Apple",
      title: "UI Engineer Co-op",
      range: "Jul - Dec 2017",
      url: "https://apple.com",
      duties: [
        "Developed and styled interactive web apps for Apple Music, including the UI of Apple Music’s embeddable web player widget for third-party websites",
        "Collaborated with designers and other engineers to ensure high-quality product delivery",
      ],
    },
    {
      company: "Scout",
      title: "Studio Developer",
      range: "Jan - Jun 2017",
      url: "https://scout.camd.northeastern.edu",
      duties: [
        "Worked with a team of three designers to build a marketing website and e-commerce platform for blistabloc, an entrepreneurial startup at Northeastern",
        "Helped solidify a brand direction for blistabloc that spans across packaging, the web, and other marketing materials",
      ],
    },
    {
      company: "Starry",
      title: "Software Engineer Co-op",
      range: "Jul - Dec 2016",
      url: "https://starry.com",
      duties: [
        "Engineered and maintained major features of Starry’s customer-facing web app using ES6, Handlebars, Backbone, Marionette and CSS",
        "Proposed and implemented scalable solutions to issues identified with cloud services and applications responsible for communicating with Starry Station",
        "Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences across Starry’s iOS and Android mobile apps",
      ],
    },
    {
      company: "MullenLowe",
      title: "Creative Technologist Co-op",
      range: "Jul - Dec 2015",
      url: "https://us.mullenlowe.com",
      duties: [
        "Developed and maintained code for in-house and client websites primarily using HTML, CSS, Sass, JavaScript, and jQuery",
        "Manually tested sites in various browsers and mobile devices to ensure cross-browser compatibility and responsiveness",
        "Clients included JetBlue, Lovesac, U.S. Cellular, U.S. Department of Defense, and more",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-[700px] mx-auto"
    >
      <motion.div variants={itemVariants} className="flex items-center mb-10">
        <span className="text-green font-mono text-xl mr-2">02.</span>
        <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">
          Where I've Worked
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[300px]"></div>
      </motion.div>

      <motion.div variants={itemVariants} className="flex flex-row gap-4">
        {/* Tab List */}
        <div className="relative">
          <div
            className="flex flex-col overflow-visible border-l border-lightest-navy w-32"
            role="tablist"
            aria-label="Job tabs"
          >
            {jobs.map((job, index) => (
              <button
                key={index}
                ref={(el) => (tabRefs.current[index] = el)}
                id={`tab-${index}`}
                role="tab"
                aria-selected={activeTabId === index}
                aria-controls={`panel-${index}`}
                tabIndex={activeTabId === index ? 0 : -1}
                onClick={() => setActiveTabId(index)}
                className={`px-5 py-3 text-xs font-mono text-left whitespace-nowrap transition-all duration-200 hover:bg-light-navy hover:text-green focus:outline-none
                                    ${
                                      activeTabId === index
                                        ? "text-green bg-light-navy/50"
                                        : "text-slate"
                                    }
                                `}
              >
                {job.company}
              </button>
            ))}
          </div>
          {/* Active Tab Indicator */}
          <div
            className="absolute bg-green transition-all duration-300 ease-in-out"
            style={indicatorStyle}
          />
        </div>

        {/* Tab Content */}
        <div className="py-2 px-4 w-full">
          {jobs.map((job, index) => (
            <motion.div
              key={index}
              id={`panel-${index}`}
              role="tabpanel"
              aria-labelledby={`tab-${index}`}
              hidden={activeTabId !== index}
              initial={{ opacity: 0, y: 10 }}
              animate={
                activeTabId === index
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.3 }}
              className={activeTabId === index ? "block" : "hidden"}
            >
              <h3 className="text-lg md:text-xl font-medium text-lightest-slate mb-1">
                <span>{job.title}</span>
                <span className="text-green">
                  {" "}
                  @{" "}
                  <a
                    href={job.url}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline inline-block relative group"
                  >
                    <span className="relative z-10">{job.company}</span>
                    <span className="absolute bottom-0 left-0 w-full h-[1px] bg-green/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                  </a>
                </span>
              </h3>
              <p className="text-xs md:text-sm font-mono text-light-slate mb-5">
                {job.range}
              </p>

              <ul className="text-slate text-base md:text-lg">
                {job.duties.map((duty, i) => (
                  <li
                    key={i}
                    className="relative pl-8 mb-3 before:content-['▹'] before:absolute before:left-0 before:text-green"
                  >
                    {duty}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Experience;
