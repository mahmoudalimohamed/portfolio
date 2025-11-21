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
        <motion.h1
          variants={itemVariants}
          className="text-green font-mono text-sm md:text-base mb-5 ml-1"
        >
          Hi, my name is
        </motion.h1>
        <motion.h2
          variants={itemVariants}
          className="text-lightest-slate text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold mb-4 tracking-tight leading-[1.1]"
        >
          Brittany Chiang.
        </motion.h2>
        <motion.h3
          variants={itemVariants}
          className="text-slate text-5xl sm:text-6xl md:text-7xl lg:text-[80px] font-bold mb-8 tracking-tight leading-[1.1]"
        >
          I build things for the web.
        </motion.h3>
        <motion.p
          variants={itemVariants}
          className="text-slate max-w-[540px] text-lg md:text-xl leading-relaxed mb-12"
        >
          I'm a software engineer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building accessible, human-centered products at{" "}
          <a
            href="https://upstatement.com/"
            target="_blank"
            rel="noreferrer"
            className="text-green hover:underline inline-block relative group"
          >
            <span className="relative z-10">Upstatement</span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-green/50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
          .
        </motion.p>
        <motion.a
          variants={itemVariants}
          href="https://github.com/bchiang7"
          target="_blank"
          rel="noreferrer"
          className="px-7 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-all duration-300 inline-block"
        >
          Check out my course!
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Hero;
