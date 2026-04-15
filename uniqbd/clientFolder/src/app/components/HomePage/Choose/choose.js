"use client";
import React, { useEffect, useRef, useState } from "react";

const Choose = () => {
  const sectionRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  const items = [
    {
      title: "Instant Delivery",
      desc: "Receive your top-up instantly",
    },
    {
      title: "Secure Payment",
      desc: "bKash, Nagad & Rocket supported",
    },
    {
      title: "Trusted Store",
      desc: "Thousands of gamers trust us",
    },
    {
      title: "24/7 Support",
      desc: "Always ready to help",
    },
  ];

  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = sectionRef.current?.getBoundingClientRect();
      if (!rect) return;

      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;

      setMouse({ x, y });
    };

    const el = sectionRef.current;
    el?.addEventListener("mousemove", handleMouseMove);

    return () => el?.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      <section
        ref={sectionRef}
        className="relative py-20 overflow-hidden"
      >
        {/* KEEP YOUR ORIGINAL GLOW */}
        <div className="absolute w-96 h-96 bg-button/20 blur-[120px] top-10 left-20"></div>
        <div className="absolute w-96 h-96 bg-button/30 blur-[120px] bottom-10 right-20"></div>

        {/* TITLE (only subtle animation added) */}
        <h2 className="text-3xl font-bold text-center mb-14 relative z-10 animate-fadeIn">
          Why Choose UniQbd
        </h2>

        <div className="grid md:grid-cols-4 gap-10 px-6 md:px-10 max-w-7xl mx-auto relative z-10">

          {items.map((item, i) => {
            const strength = (i + 1) * 6;

            return (
              <div
                key={i}
                className="group backdrop-blur-lg bg-button/5 rounded-2xl p-8 shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-2"
                style={{
                  transform: `translate(${mouse.x * strength}px, ${mouse.y * strength}px)`,
                }}
              >
                {/* ICON PULSE ONLY */}
                <div className="text-4xl mb-2 group-hover:animate-bounce transition">
                  ✨
                </div>

                <h3 className="font-semibold mt-4 text-lg text-text">
                  {item.title}
                </h3>

                <p className="text-sm mt-2 text-gray-700">
                  {item.desc}
                </p>

                {/* glow line (unchanged style feel) */}
                <div className="h-[2px] w-0 group-hover:w-full transition-all duration-500 bg-button mt-4"></div>
              </div>
            );
          })}

        </div>
      </section>
    </div>
  );
};

export default Choose;