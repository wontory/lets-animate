import React, { forwardRef } from "react";

const Card = forwardRef(({ className = "", children, ...props }, ref) => {
  return (
    <div
      className={`w-64 h-96 rounded shadow-xl ${className}`}
      ref={ref}
      {...props}
    >
      {children}
    </div>
  );
});

Card.displayName = "Card";

export default Card;
