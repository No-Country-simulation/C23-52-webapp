import React from "react";
import { creators } from "../constants/featuredCreators";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function SupportCreators() {
  return (
    <section className="bg-black flex flex-col justify-around w-full h-full">
      <div className="text-center py-5 md:mb-10 mb-5">
        <h3 className="text-3xl mb-5 font-bold">Apoya a los creadores de Ruminet</h3>
        <p className="text-xl dont-semibold">Tu donacion ayuda a mantener la plataforma y a los artistas</p>
      </div>
      <div className="flex md:justify-evenly justify-around">
        <div className="md:flex flex-col hidden gap-5">
          {creators.map((creator) => (
            <ul className="border-lg rounded-lg bg-black" key={creator.id}>
              <Image
                src={creator.image}
                width={100}
                height={50}
                alt={creator.alt}
                className="object-cover rounded-lg"
              />
            </ul>
          ))}
        </div>

        <div className="flex flex-col gap-10 mb-5">
          <div className="flex gap-5">
            <CustomButton text={"$500"} />
            <CustomButton text={"$1000"} />
            <CustomButton text={"$5000"} />
          </div>
          <h3 className="text-center text-2xl font-semibold">Objetivo Mensual: $200</h3>
          <p className="text-center text-xl font-semibold">Objetivo actual: $100</p>
        </div>
        <div className="md:flex flex-col hidden gap-5">
          {creators.map((creator) => (
            <ul className="border-lg rounded-lg mb-10 bg-black" key={creator.id}>
              <Image
                src={creator.image}
                width={100}
                height={50}
                alt={creator.alt}
                className="object-cover rounded-lg"
              />
            </ul>
          ))}
        </div>

        
      </div>
    </section>
  );
}
