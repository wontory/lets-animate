"use client";

import React from "react";
import Card from "@/components/Card";

const FlipCard = () => {
  return (
    <div className="group w-64 h-96 [perspective:1000px]">
      <div className="relative w-full h-full transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        <Card className="absolute inset-0 bg-black [backface-visibility:hidden]" />
        <Card className="absolute inset-0 bg-white [backface-visibility:hidden] [transform:rotateY(180deg)]" />
      </div>
    </div>
  );
};

export default FlipCard;
