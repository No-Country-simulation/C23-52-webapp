import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";

export default function Hero() {
  return (
    <div>
      <Image
        width={400}
        height={400}
        priority
        src="/images/creators-images/hero-creators.png"
        alt="featured creators"
        className="w-full md:h-[340px] object-cover"
      />
      <div className="bg-black flex flex-col items-center justify-center text-center gap-4 py-5 md:px-5 px-2">
        <h2 className="text-[#E10D0D] text-2xl font-bold ">
          En Ruminet !tu marca puede crecer mas!
        </h2>
        <span className="text-2xl font-semibold text-white">
          Patrocina a nuestros creadores y sé parte de su exito
        </span>
        <p className="p-2 text-md font-semibold text-white">
          Nos encantaría ofrecerte la oportunidad de patrocinar a nuestros
          talentosos artistas, ayudando a tu marca a crecer mientras apoyas a la
          comunidad creativa. Al patrocinar a nuestros creadores, no solo
          amplías tu visibilidad, sino que también forma parte de un proyecto
          inclusivo y apasionante. Si te interesa conocer más sobre cómo podemos
          colaborar, no dudes en contactarnos para más información. Esperamos
          poder contar con tu apoyo y construir juntos un futuro creativo.
        </p>
        <CustomButton href={"/publish"} text={"Comienza a crear"} />
      </div>
    </div>
  );
}
