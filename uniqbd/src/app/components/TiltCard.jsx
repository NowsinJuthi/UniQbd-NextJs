"use client";
import { useRef } from "react";

const TiltCard = ({ product }) => {
  const cardRef = useRef(null);
  const imgRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const img = imgRef.current;
    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * -10;

    // small transition for smooth real-time response
    card.style.transition = "transform 0.05s ease-out";
    img.style.transition = "transform 0.05s ease-out";

    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    img.style.transform = `translateX(${rotateY * 4}px) translateY(${rotateX * 4}px) translateZ(40px)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    const img = imgRef.current;

    // Smooth reset
    card.style.transition = "transform 0.3s ease-out";
    img.style.transition = "transform 0.3s ease-out";

    card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";
    img.style.transform = "translateX(0px) translateY(0px) translateZ(0px)";
  };

  return (
    <div
      className="group perspective-[1000px] w-[500px] h-[500px] m-20"
      style={{ perspective: "1000px" }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="relative bg-imgcard backdrop-blur-3xl cursor-pointer
                   flex flex-col items-center justify-center px-4 py-4 rounded-xl text-sm font-medium text-button
                   hover:shadow-2xl border-button shadow-inner shadow-button/30 transform-gpu will-change-transform"
      >
        {/* Glow effect */}
        <div className="absolute bg-button/30 blur-3xl opacity-40 top-[-20px] left-[-20px] rounded-full pointer-events-none"></div>
        <div className="absolute bg-button/20 blur-3xl opacity-30 bottom-[-20px] right-[-20px] rounded-full pointer-events-none"></div>

        {/* Product Image with pop-out + smooth movement */}
        <img
          ref={imgRef}
          src={product.img}
          alt={product.name}
          className="object-contain z-10"
          style={{ transformStyle: "preserve-3d" }}
        />

        {/* Product Name */}
        <h3 className="mt-4 text-text font-semibold text-center z-20 relative">
          {product.name}
        </h3>
      </div>
    </div>
  );
};

export default TiltCard;