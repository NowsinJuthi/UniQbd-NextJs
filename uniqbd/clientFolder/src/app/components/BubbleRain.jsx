"use client";
import { useEffect, useState } from "react";

const BubbleRain = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const generated = Array.from({ length: 35 }).map(() => ({
      left: Math.random() * 100,                 // horizontal position
      duration: 20 + Math.random() * 20,        // 🔥 20s to 40s slow fall
      size: 20 + Math.random() * 20,          // 🔥 bigger bubbles 100-200px
      delay: Math.random() * 20                  // staggered start
    }));

    setBubbles(generated);
  }, []);

  return (
    <div className="bubble-rain">
      {bubbles.map((b, i) => (
        <span
          key={i}
          style={{
            left: b.left + "%",
            width: b.size + "px",
            height: b.size + "px",
            animationDuration: b.duration + "s",
            animationDelay: b.delay + "s"
          }}
        />
      ))}
    </div>
  );
};

export default BubbleRain;