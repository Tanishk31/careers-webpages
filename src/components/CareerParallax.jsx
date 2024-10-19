import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CareerParallax = () => {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute top-0 left-0 w-full h-full bg-center bg-cover rounded-t-[50%] mt-36 scale-x-[1.5]"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80')`,
        }}
      />
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center mt-10 px-6">
        <h2 className="text-white text-[36px] font-bold mb-4 font-yaro">
          | Career
        </h2>
        <h3 className="text-white text-[30px] font-bold mb-6">
          Find A Job At Anvey
        </h3>
        <p className="text-white text-[18px] font-medium mb-8 max-w-2xl">
          Join a dynamic team of experts committed to delivering cutting-edge
          solutions for the oil and gas industry. Grow your career with us and
          be part of a company that drives excellence and transforms the
          industry.
        </p>
        <Link to="/career">
          <button className="bg-transparent hover:bg-white text-white hover:text-black border-2 border-white font-bold py-3 px-12 rounded-full transition duration-300">
            GO TO CAREERS
          </button>
        </Link>
      </div>

      {/* Bottom Wave Shape */}
      <svg
        className="absolute bottom-0 left-0 w-full h-auto"
        viewBox="0 0 1340 20"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.8"
          d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,229.3C960,245,1056,203,1152,170.7C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        />
      </svg>
    </div>
  );
};


export default CareerParallax;
