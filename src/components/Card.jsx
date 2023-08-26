import React, { forwardRef } from "react";

const Card = forwardRef(({ className = "", ...props }, ref) => {
  return (
    <div
      className={`w-64 h-96 bg-black rounded shadow-xl ${className}`}
      ref={ref}
      {...props}
    />
  );
});

Card.displayName = "Card";

export default Card;
