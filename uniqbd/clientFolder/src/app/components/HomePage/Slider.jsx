"use client";

import React, { useRef,useEffect, useState} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const HomeSliderDisplay = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    pauseOnHover: true,
    fade: true, 
  };



  const [sliderImages, setSliderImages] = useState([]);

  useEffect(() => {
    fetch("https://uniqbd-nextjs-3.onrender.com/api/v1/home-slider/images")
      .then(res => res.json())
      .then(data => {
        if (data.success) setSliderImages(data.data);
      });
  }, []);


  return (
    <div className="relative w-full px-4 md:px-8 lg:px-8 mt-8">
      <Slider ref={sliderRef} {...settings}>
        {sliderImages.map((src, index) => (
          <div key={index} className="relative">
            <img
              className="w-full rounded-3xl shadow-2xl h-[320px] md:h-[440px] lg:h-[560px] object-cover"
               src={`http://localhost:3001${src}`} 
              alt={`slider${index + 1}`}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-3xl"></div>
            <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-b from-transparent via-black/30 to-black rounded-b-3xl"></div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default HomeSliderDisplay;

