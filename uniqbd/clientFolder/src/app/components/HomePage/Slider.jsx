"use client";

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HomeSlider = () => {
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
    fade: true, // smooth fade transition
  };

  return (
    <div className="relative w-full px-4 md:px-8 lg:px-8 mt-8">
      <Slider ref={sliderRef} {...settings}>
        
        {/* Slide 1 */}
        <div className="relative">
          <img
            className="w-full rounded-3xl shadow-2xl h-[320px] md:h-[440px] lg:h-[560px] object-cover"
            src="/images/slider1.jpg"
            alt="slider1"
          />

          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-3xl"></div>

          {/* Bottom Fade */}
          <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-b from-transparent via-black/30 to-black rounded-b-3xl"></div>

          {/* Slide Content */}
          <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-snug drop-shadow-lg">
                Instant Game Top-Up
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-sm">
                Buy PUBG UC, Free Fire Diamonds, and COD Points instantly in Bangladesh.
              </p>
              <button className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-purple-500/50 transition-all duration-300">
                Shop Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className="relative">
          <img
            className="w-full rounded-3xl shadow-2xl h-[320px] md:h-[440px] lg:h-[560px] object-cover"
            src="/images/slider2.jpg"
            alt="slider2"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-b from-transparent via-black/30 to-black rounded-b-3xl"></div>

          <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Cheapest Gift Cards
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-sm">
                Steam, Google Play, Apple & PlayStation cards available.
              </p>
              <button className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-blue-500/50 transition-all duration-300">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Slide 3 */}
        <div className="relative">
          <img
            className="w-full rounded-3xl shadow-2xl h-[320px] md:h-[440px] lg:h-[560px] object-cover"
            src="/images/slider3.jpg"
            alt="slider3"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent rounded-3xl"></div>
          <div className="absolute bottom-0 left-0 w-full h-44 bg-gradient-to-b from-transparent via-black/30 to-black rounded-b-3xl"></div>

          <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
            <div className="text-white max-w-xl">
              <h1 className="text-3xl md:text-5xl font-bold mb-4 drop-shadow-lg">
                Fast & Secure Payment
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-200 drop-shadow-sm">
                bKash, Nagad, Rocket payments supported.
              </p>
              <button className="px-8 py-3 bg-pink-600 hover:bg-pink-700 text-white rounded-lg font-semibold shadow-lg hover:shadow-pink-500/50 transition-all duration-300">
                Explore
              </button>
            </div>
          </div>
        </div>

      </Slider>
    </div>
  );
};

export default HomeSlider;