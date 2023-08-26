"use client";

import React, { useRef } from "react";
import { useSpring, animated } from "@react-spring/web";
import Card from "@/components/Card";

const AnimatedCard = animated(Card);

const TiltCard = () => {
  const cardRef = useRef(null);

  const [{ xys }, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 2000, friction: 200 },
  }));

  const calc = (x, y) => [
    -(y - cardRef.current.offsetTop - cardRef.current.clientHeight / 2) / 20,
    (x - cardRef.current.offsetLeft - cardRef.current.clientWidth / 2) / 20,
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
    <AnimatedCard
      className="bg-black"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={cardRef}
      style={{ transform: xys.to(trans) }}
    />
  );
};

export default TiltCard;
