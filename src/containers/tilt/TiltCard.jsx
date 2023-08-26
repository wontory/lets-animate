"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";

const TiltCard = () => {
  const divRef = useRef(null);

  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 2000, friction: 200 },
  }));

  const calc = (x, y) => [
    -(y - divRef.current.offsetTop - divRef.current.clientHeight / 2) / 20,
    (x - divRef.current.offsetLeft - divRef.current.clientWidth / 2) / 20,
    1,
  ];

  const trans = (x, y, s) =>
    `perspective(1000px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

  const handleMouseMove = ({ clientX: x, clientY: y }) => {
    set({ xys: calc(x, y) });
  };

  const handleMouseLeave = () => {
    set({ xys: [0, 0, 1] });
  };

  return (
    <animated.div
      className="w-64 h-96 bg-black rounded shadow-xl"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={divRef}
      style={{ transform: xys.to(trans) }}
    />
  );
};

export default TiltCard;
