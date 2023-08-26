"use client";

import React from "react";
import Link from "next/link";

const LibrariesList = ({ libraries }) => {
  return (
    <div>
      <p>Libraries</p>
      {libraries.map((library) => (
        <Link key={library} href={`/${library}`}>
          {library}
        </Link>
      ))}
    </div>
  );
};

export default LibrariesList;
