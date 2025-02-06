import React from "react";
import { creators } from "../constants/featuredCreators";
import Image from "next/image";
import CustomButton from "@/components/CustomButton";

export default function CardFeaturedCreators() {
  return (
    <div className="flex justify-around mt-10 gap-10">
      {creators.map((creator) => (
        <ul className="border-lg md:flex flex-col rounded-lg bg-black" key={creator.id}>
          <Image
            src={creator.image}
            width={330}
            height={300}
            alt={creator.alt}
            className="object-cover rounded-lg"
          />
          <div className="md:py-5 text-pretty text-center text-white">
            <h2 className="px-2 font-semibold ">{creator.name}</h2>
            <p className="px-2 py-3">{creator.description}</p>
            <CustomButton text={"Ver Perfil"}/>
          </div>
        </ul>
      ))}
    </div>
  );
}
