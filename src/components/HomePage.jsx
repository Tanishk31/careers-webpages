import React, { useEffect, useRef, useState } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import Carousel from "./Carousel";
import EnhancedCarousel from "./EnhancedCarousel";
import CareerParallax from "./CareerParallax";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ImageAccordion from "./ImageAccordian";

const slideInFromLeft = {
  hidden: { x: -200 }, // Sharp slide in from the left
  visible: { x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const AnimatedSection = ({ children, animation = fadeInFromBottom }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={animation}
    >
      {children}
    </motion.div>
  );
};

const queries = [
  {
    id: 1,
    question: "What does Anvey specialize in?",
    answer:
      "Anvey specializes in providing innovative engineering solutions for the oil and gas industry, focusing on upstream services. Our product line includes artificial lift systems, wellhead bypass tools, Juggler sand lifters, HymaFRAC packers, and Maglev Linear Motor Drive Plunger Pumps. We design tools that enhance well efficiency, reduce costs, and maximize production.",
  },
  {
    id: 2,
    question: "What is the HymaFRAC packer, and how does it work?",
    answer:
      "The HymaFRAC packer is a hydraulic, resettable straddle packer used for multi-stage well stimulation. It's designed for high-pressure operations like hydro-fracturing, water flooding, and acid stimulation. The packer's compact design allows it to be used in both vertical and deviated wells, offering reliable zonal isolation and treatment in tough conditions.",
  },
  {
    id: 3,
    question:
      "How does the Maglev Linear Motor Drive Plunger Pump differ from traditional plunger pumps?",
    answer:
      "The Maglev Linear Motor Drive Plunger Pump uses magnetic levitation to drive the pump, eliminating the need for sucker rods. This rodless design reduces tubing wear, handles sand and heavy crude effortlessly, and increases operational efficiency. It is controlled via surface VFDs and provides real-time well data through downhole sensors, making it a superior alternative to traditional plunger pumps.",
  },
  {
    id: 4,
    question:
      "How do Anvey's artificial lift systems help improve well production?",
    answer:
      "Our artificial lift systems, including plunger lifts and gas-assisted plunger lifts, are engineered to optimize well production, particularly in low-pressure or liquid-loading wells. These systems efficiently remove liquids from the wellbore, reducing downtime and improving gas flow rates, thereby enhancing overall well performance.",
  },
  {
    id: 5,
    question: "What makes the Juggler tool unique for wellbore cleanout?",
    answer:
      "The Juggler tool is an auto-rotating sand lifter designed to remove sand and debris from the wellbore. It operates using both churning and reciprocation motions, which break down hard debris and lift it efficiently out of the well. It is particularly effective in depleted reservoirs and works in both vertical and deviated wells, providing continuous cleanout without the need for complex equipment.",
  },
  {
    id: 6,
    question: "What are Anvey's core values?",
    answer:
      "At Anvey, we are driven by\n ● Innovation: We constantly push the boundaries with advanced engineering solutions.● Client-Centric Customization: We provide tailored solutions for every unique well condition.● Operational Efficiency: Our products reduce downtime and improve well performance, saving costs.●  Reliability: Our field-tested tools are designed to perform in the toughest conditions.● Sustainability: We develop energy-efficient tools that minimize environmental impact while maximizing productivity.",
  },
  {
    id: 7,
    question: "How can I apply for a job at Anvey?",
    answer: "You can visit our Careers section on the website to see available positions. If you find a role that suits your skills, fill out our detailed application form, attach your resume, and submit it online. We are always on the lookout for passionate individuals who love the trade and are eager to make a difference in the oil and gas sector.",
  },
  {
    id: 8,
    question: "What is the Wellhead Bypass Tool, and when should it be used?",
    answer:
      "The Wellhead Bypass Tool is used during high-pressure stimulation operations to protect the original wellhead and production valves from damage caused by corrosive fluids and abrasives. It allows operators to perform high-pressure treatments without upgrading the wellhead and is designed for fast installation without the need for a workover rig.",
  },
  {
    id: 9,
    question: "How does Anvey ensure the quality of its products?",
    answer:
      "All our products are manufactured under strict quality control programs that meet industry standards. From wellhead bypass tools to complex artificial lift systems, we use high-quality materials and rigorous testing to ensure our tools can handle extreme well conditions. Our commitment to quality translates into longer product life and better performance.",
  },
  {
    id: 10,
    question:
      "What sets Anvey apart from other companies in the oil and gas sector?",
    answer:
      "Anvey stands out due to our ability to provide customized solutions, our commitment to innovation, and our client-focused approach. We design and manufacture tools that are tailored to the specific challenges of each well, ensuring the highest efficiency and reliability. Our team of experienced field professionals is dedicated to delivering outstanding service and support to our clients, ensuring their operations run smoothly and cost-effectively.",
  },
];

const HomePage = () => {
  const [isHeroVisible, setIsHeroVisible] = useState(false);
  const [linesVisible, setLinesVisible] = useState(false);
  const [isAboutVisible, setIsAboutVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const aboutSectionRef = useRef(null);


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsHeroVisible(true);
    }, 100);

    const lineTimer = setTimeout(() => {
      setLinesVisible(true);
    }, 2000);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsAboutVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold: 0.5 }
    );

    if (aboutSectionRef.current) {
      observer.observe(aboutSectionRef.current);
    }

    return () => {
      clearTimeout(timer);
      clearTimeout(lineTimer);
      if (aboutSectionRef.current) {
        observer.unobserve(aboutSectionRef.current);
      }
    };
  }, []);

  const toggleQuery = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="font-montserrat">
      {/* Hero Section */}
      <div className="relative w-full h-screen flex justify-center items-center overflow-hidden -mt-20">
        {/* Background image with semi-circle */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-center bg-cover rounded-b-[50%] scale-x-[1.5]"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
          }}
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center z-20">
          <div
            className={`text-center text-white transition-all duration-1500 ease-in-out ${
              isHeroVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            <h1 className="text-[42px] font-bold mb-2">
              Your Trusted Partner In
            </h1>
            <h1 className="text-[42px] font-bold text-sky-400 mb-4 font-yaro">
              Upstream Engineering
            </h1>

            <div className="flex flex-col items-center">
              <svg
                className={`w-[500px] h-5 transition-all duration-500 ease-in-out ${
                  linesVisible ? "stroke-animate" : ""
                }`}
                viewBox="0 0 500 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 250 0 500 10"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="transparent"
                  className="line"
                />
              </svg>
              <svg
                className={`w-[500px] h-5 transition-all duration-500 ease-in-out mr-10 -mt-3 ${
                  linesVisible ? "stroke-animate" : ""
                }`}
                viewBox="0 0 400 20"
                fill="ffffff"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 10 Q 250 0 500 10"
                  stroke="#ffffff"
                  strokeWidth="2"
                  fill="transparent"
                  className="line"
                />
              </svg>
            </div>

            <p className="text-[16px] mb-8">
              Exploring New Horizons with Innovative Engineering Solutions
            </p>
            <div className="space-x-4">
              <button className="bg-sky-400 text-[15px] font-bold text-white px-8 py-3 rounded-full text-lg hover:bg-navy-900 transition-colors duration-300">
                Explore Products
              </button>
              <Link to="/services">
                <button className="bg-transparent text-[15px] font-medium text-white px-8 py-3 rounded-full text-lg border border-white hover:bg-white/20 transition-colors duration-300">
                  Explore Services
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* About Us Section */}
      <div
        className="flex  justify-center items-center h-screen bg-white -mt-32 "
        ref={aboutSectionRef}
      >
        <div
          className={`flex justify-between items-start w-[80%] mt-10 p-10 bg-blue-50 rounded-3xl shadow-lg ${
            isAboutVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-12"
          } transition-all duration-1000 ease-in-out`}
        >
          <AnimatedSection animation={slideInFromLeft}>
            <div className="mr-5">
              <h2 className="text-[30px] text-[#1D3D71] font-bold mb-6 text-navy-900 font-yaro">
                About Us
              </h2>
              <p className="text-[17px] leading-[27px] font-medium mb-5 ">
                Founded in 2022, we at Anvey are dedicated to delivering
                innovative engineering solutions. Specializing in cutting-edge
                technologies such as stimulation tools, artificial lift systems,
                well completions, gas environment packers, and maglev pumps, we
                provide customized tools that enhance operational efficiency and
                boost productivity.
              </p>
              <Link to="/contact">
                <button className="bg-sky-400 text-white px-6 py-3 rounded-full text-[15px] font-bold uppercase hover:bg-navy-900 transition-colors duration-300 mt-8">
                  Contact Us
                </button>
              </Link>
            </div>
          </AnimatedSection>
          <div className="w-full">
            <img
              src="https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
              alt="About Us"
              className="w-full rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="flex w-[75%] mx-auto flex-col gap-20">
        <h1 className="text-[40px] font-bold font-yaro animate-slideInLeft text-[#1D3D71]">
          | Our Services
        </h1>
        <EnhancedCarousel />
        <Link className="mx-auto mb-10 mt-8" to="/services">
          <button className="text-white bg-blue-400 font-bold px-8 py-3 rounded-full text-lg border border-blue hover:bg-white/20 hover:text-blue-400 hover:border-blue-400 transition-colors duration-300 animate-slideInUp">
            View More
          </button>
        </Link>
      </div>

      <ImageAccordion />
      <CareerParallax />
      {/* Common Queries Section */}
      <div className="bg-white py-16">
        <div className="p-20 mx-auto text-center">
          <h2 className="text-5xl text-left font-bold mb-10 text-navy-900 font-yaro text-[#1D3D71]">
            Common Queries
          </h2>
          <p className="text-xl text-left mb-8">
            Your Answers to Common Questions
          </p>

          <div className="grid grid-cols-2 gap-8">
            {queries.map((query, index) => (
              <div
                key={query.id}
                className="text-left border-b-2 border-black p-3"
              >
                <button
                  onClick={() => toggleQuery(index)}
                  className="w-full text-left text-lg font-semibold mb-2 flex justify-between items-center"
                >
                  <span>
                    {query.id}. {query.question}
                  </span>
                  <span>{activeIndex === index ? "▲" : "▶"}</span>
                </button>
                <div
                  className={`transition-all duration-500 overflow-hidden ${
                    activeIndex === index
                      ? "max-h-96 opacity-100 p-4"
                      : "max-h-0 opacity-0 p-0"
                  } bg-gray-100 rounded-lg`}
                >
                  <p className="mt-2">{query.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Contact Section */}
      <div className="bg-white -mt-6">
        <div className="mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-navy-900 font-yaro text-[#1D3D71]">
            Still have doubts? Let's Get In Touch
          </h2>
          <div className="flex justify-center space-x-16">
            <div className="bg-blue-100 p-2 px-10 rounded-[50px] w-72 shadow-lg shadow-blue-100 text-center ">
              <FaMapMarkerAlt className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-[19px] font-semibold mb-2">Address</h3>
              <p className="text-[13px] font-normal">15 A 1/3, SEPCO TOWNSHIP, Durgapur, WB-713205
              </p>
            </div>
            <div className="bg-blue-100 p-6 px-10 rounded-[50px] w-72 shadow-lg  shadow-blue-100 text-center ">
              <FaEnvelope className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-[19px] font-semibold mb-2">Email</h3>
              <p className="text-[13px] font-normal">Sales@anvey.in
              </p>
            </div>
            <div className="bg-blue-100 p-2 px-10 rounded-[50px] w-72 shadow-lg shadow-blue-100 text-center ">
              <FaPhoneAlt className="text-3xl text-sky-400 mb-4 mx-auto" />
              <h3 className="text-[19px] font-semibold mb-2">Phone</h3>
              <p className="text-[13px] font-normal">+917060060039/ +917300534848</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
