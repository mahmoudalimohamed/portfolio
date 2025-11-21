import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Hero = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center items-start max-w-[1000px] mx-auto px-0"
    >
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full"
      >
        <motion.h2
          variants={itemVariants}
          className="text-green font-mono text-sm md:text-base mb-5 ml-1"
        >
          Welcome To My Portfolio,
        </motion.h2>

        <motion.h3
          variants={itemVariants}
          className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold mb-8 tracking-tight leading-[1.1]"
        >
          I build things for the web.
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-white max-w-[540px] text-lg md:text-xl leading-relaxed mb-12"
        >
          I'm a Full-Stack Engineer creating scalable web & mobile apps using
          React, React Native, and Django.
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="https://github.com/mahmoudalimohamed"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-all duration-300 inline-block"
        >
          Check out my projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
