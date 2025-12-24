// components/Snow.js
'use client'
import { useEffect, useState } from "react";

const Snow = () => {
  const [flakes, setFlakes] = useState([]);

  useEffect(() => {
    const numFlakes = 150; // количество снежинок
    const generatedFlakes = [];

    for (let i = 0; i < numFlakes; i++) {
      generatedFlakes.push({
        id: i,
        style: {
          left: `${Math.random() * 100}%`,
          animationDuration: `${5 + Math.random() * 5}s`,
          animationDelay: `${Math.random() * 5}s`,
          fontSize: `${10 + Math.random() * 10}px`,
          opacity: 0.7 + Math.random() * 0.3,
        },
      });
    }

    setFlakes(generatedFlakes);
  }, []);

  return (
      <>
        <div className="snow-container">
          {flakes.map((flake) => (
              <div key={flake.id} className="snowflake" style={flake.style}>
                ❄
              </div>
          ))}
        </div>

        <style jsx>{`
        .snow-container {
          pointer-events: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          overflow: hidden;
          z-index: 9999;
        }

        .snowflake {
          position: absolute;
          top: -10px;
          color: white;
          user-select: none;
          animation-name: fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }

        @keyframes fall {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          100% {
            transform: translateY(100vh) rotate(360deg);
          }
        }
      `}</style>
      </>
  );
};

export default Snow;
