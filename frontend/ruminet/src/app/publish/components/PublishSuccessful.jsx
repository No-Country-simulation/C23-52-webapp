import CustomButton from "@/components/CustomButton";
import Link from "next/link";
import React from "react";

export const PublishSuccessful = () => {
  return (
    <div className="bg-black h-screen w-full">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-[#3E3E3E] h-full p-10 md:mt-32 text-white rounded-xl flex flex-col justify-center items-center text-lg text-center mt-20">
          <h1 className="mt-10 text-4xl font-bold mb-5">
            Comic publicado correctamente
          </h1>
        
          <CustomButton href="/" text="Volver al inicio"/>
        </div>
      </div>
    </div>
  );
};
