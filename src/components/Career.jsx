import React from "react";
import { motion } from "framer-motion";
import JobApplicationSection from "./JobApplicationSection";

const Career = () => {
  // Animation variants for the text
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const fadeInUpDelay = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.4 } },
  };

  // Animation for the wave
  const waveAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1, delay: 0.6 } },
  };

  return (
    <>
      <div className="relative h-screen flex items-center justify-center overflow-hidden -mt-20">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('/xx.jpeg')`,
            filter: "brightness(60%)",
          }}
        />

        {/* Content */}
        <motion.div
          className="relative z-20 text-center text-white px-4"
          initial="hidden"
          animate="visible"
        >
          {/* Title */}
          <motion.h1 className="text-[56px] font-bold mb-4 font-yaro " variants={fadeInUp}>
            Career
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-[18px] font-normal max-w-2xl mx-auto"
            variants={fadeInUpDelay}
          >
            Get in Touch with Us! We're here to answer your questions and
            discuss how we can support your needs.
          </motion.p>
        </motion.div>

        {/* Wave shape with animation */}
        <motion.div
          className="absolute z-20 bottom-0 left-0 right-0"
          initial="hidden"
          animate="visible"
          variants={waveAnimation}
        >
          <svg
            viewBox="0 0 1440 320"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#ffffff"
              fillOpacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,165.3C384,149,480,139,576,149.3C672,160,768,192,864,186.7C960,181,1056,139,1152,117.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </motion.div>
      </div>
      <JobApplicationSection />
    </>
  );
};

export default Career;
