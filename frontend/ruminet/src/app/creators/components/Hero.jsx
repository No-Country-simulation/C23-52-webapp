import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <h1>Creators</h1>
      <Image
        width={200}
        height={400}
        src="/images/creators/men-writing.png"
        alt="featured creators"
      />
    </div>
  );
}
