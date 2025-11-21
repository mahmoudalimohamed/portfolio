import React from "react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

const Contact = () => {
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
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      className="max-w-[600px] mx-auto text-center"
    >
      <motion.p
        variants={itemVariants}
        className="font-mono text-green text-base mb-5"
      >
        04. What's Next?
      </motion.p>
      <motion.h2
        variants={itemVariants}
        className="text-lightest-slate text-4xl md:text-5xl font-bold mb-6"
      >
        Get In Touch
      </motion.h2>
      <motion.p variants={itemVariants} className="text-slate text-lg mb-12">
        Although I'm not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I'll
        try my best to get back to you!
      </motion.p>
      <motion.a
        variants={itemVariants}
        href="mailto:brittany.chiang@gmail.com"
        className="px-8 py-4 border border-green text-green rounded font-mono text-sm hover:bg-green/10 transition-all duration-300 inline-block"
      >
        Say Hello
      </motion.a>
    </motion.div>
  );
};

export default Contact;
