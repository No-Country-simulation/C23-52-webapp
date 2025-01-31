import Image from "next/image";
import React from "react";

export default function Logo() {
  return (
    <div className="md:ml-10  md:mr-10 ml-16">
      
      <Image src="/images/LogoNavbar.png" className="object-cover" alt="logo-ruminet" width={200} height={100}/>
    </div>
  );
}
