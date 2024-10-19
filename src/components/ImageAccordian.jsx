import React, { useState, useEffect } from "react";

const ImageAccordion = () => {
  const images = [
    { id: 1, src: "/xx.jpeg", alt: "Image 1" },
    { id: 2, src: "/xx.jpeg", alt: "Image 2" },
    { id: 3, src: "/xx.jpeg", alt: "Image 3" },
    { id: 4, src: "/xx.jpeg", alt: "Image 4" },
    { id: 5, src: "/xx.jpeg", alt: "Image 5" },
  ];

  const [activeIndex, setActiveIndex] = useState(null);
  const [showViewMore, setShowViewMore] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const position = window.scrollY + window.innerHeight;
      const bottomSection =
        document.getElementById("accordion-section").offsetTop;

      if (position > bottomSection) {
        setShowViewMore(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className="relative w-full h-screen flex flex-col justify-center items-center overflow-hidden"
      id="accordion-section"
    >
      <div className="relative w-full flex justify-center items-center h-[100vh]">
        {images.map((image, index) => (
          <div
            key={image.id}
            className={`relative overflow-hidden h-[70vh] transition-all duration-500 ${
              activeIndex === index ? "w-3/5" : "w-1/5"
            }`}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-all duration-500"
            />
            {activeIndex === index && (
              <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white transition-all duration-500">
                <h3 className="text-2xl mb-2 opacity-100 transition-opacity duration-500 font-bold">
                  Image Accordion Title
                </h3>
                <button className="bg-transparent border-2 border-white text-white hover:text-black px-4 py-2 rounded-full opacity-100 transition-opacity duration-500 hover:bg-white">
                  Read More
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      {showViewMore && (
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-700 translate-y-0 opacity-100">
        </div>
      )}
    </div>
  );
};

export default ImageAccordion;
