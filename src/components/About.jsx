import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const About = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const skills = [
    "JavaScript",
    "React & React Native",
    "Node.js",
    "Express",
    "Python",
    "Django & Django REST Framework",
    "MySQL & PostgreSQL",
    "Supabase & AppWrite",
    "Clerk Auth",
    "TailwindCSS & Styled Components",
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
      className="max-w-[900px] mx-auto"
    >
      <motion.div variants={itemVariants} className="flex items-center mb-10">
        <span className="text-green font-mono text-xl mr-2">01.</span>
        <h2 className="text-lightest-slate text-2xl md:text-3xl font-bold whitespace-nowrap">
          About Me
        </h2>
        <div className="h-[1px] bg-lightest-navy w-full ml-5 max-w-[300px]"></div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div
          variants={itemVariants}
          className="md:col-span-2 text-slate text-lg leading-relaxed"
        >
          <p className="mb-4">
            Hello! My name is Mahmoud Ali, and I enjoy building modern digital
            products that solve real problems. My journey into development
            started with a simple curiosity about how websites worked — and that
            curiosity quickly grew into a passion for creating full-stack
            applications that feel smooth, fast, and intuitive.
          </p>
          <p className="mb-4">
            Over the years, I’ve worked on a variety of projects ranging from
            React frontends, React Native mobile apps, to Django REST APIs
            powering real production systems. I’ve built everything from
            portfolio designs, authentication flows, and UI components, to
            complete platforms like work-hours management systems, project
            tracking dashboards, and time slot booking systems.
          </p>
          <p className="mb-4">
            I also spend a lot of time refining my workflow: Docker setups, S3
            static hosting, MySQL/PostgreSQL databases, and deploying Django +
            React in real environments.
          </p>
          <p className="mb-4">
            Here are a few technologies I've been working with recently:
          </p>
          <ul className="grid grid-cols-2 gap-2 font-mono text-sm mt-5">
            {skills.map((skill) => (
              <li
                key={skill}
                className="flex items-center before:content-['▹'] before:text-green before:mr-2"
              >
                {skill}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="md:col-span-1 relative group"
        >
          {/* Image Container with Teal Overlay */}
          <div className="relative w-full max-w-[300px] mx-auto md:mx-0 aspect-square rounded bg-green hover:bg-transparent transition-colors duration-300">
            <div className="absolute inset-0 bg-navy mix-blend-screen hover:mix-blend-normal transition-all duration-300 rounded"></div>
            <img
              src="/mahmoudalilogo1.png"
              alt="Profile"
              className="rounded relative z-10 mix-blend-multiply hover:mix-blend-normal filter grayscale hover:grayscale-0 transition-all duration-300 object-cover w-full h-full translate-x-0 translate-y-0 group-hover:-translate-x-1 group-hover:-translate-y-1"
            />
            <div className="absolute inset-0 border-2 border-green rounded translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-all duration-300"></div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
