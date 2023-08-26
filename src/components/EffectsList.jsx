"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";

const EffectsList = ({ effects }) => {
  const library = usePathname().split("/")[1];
  const router = useRouter();

  return (
    <div>
      <p>Selected Library: {library}</p>
      {effects.map((effect) => (
        <button
          key={effect}
          onClick={() => router.push(`/${library}/${effect}`)}
        >
          {effect}
        </button>
      ))}
    </div>
  );
};

export default EffectsList;
