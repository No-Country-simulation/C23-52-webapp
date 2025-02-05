import Link from "next/link";
import React from "react";

export const PaymentSuccesful = () => {
  return (
    <div className="bg-black h-screen">
      <div className="text-white flex flex-col justify-center items-center px-5">
        <h1 className="mt-52 text-4xl font-bold">
          Gracias por ser parte de Ruminet
        </h1>
        <div className="bg-[#333333] rounded-xl flex flex-col justify-center items-center text-lg text-center mt-5 h-[200px]">
          <p className="mb-5 px-5">
            Con tu membresia estandar, tienes acceso a explorar y compratir
            increibles historias.
          </p>
          <p className="mb-10">!Disfruta al maximo tu experiencia Ruminet!</p>
          <Link className="border p-2 rounded-lg mt-2" href="/">
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
};
