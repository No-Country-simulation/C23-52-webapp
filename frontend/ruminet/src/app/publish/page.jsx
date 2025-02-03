import React from "react";
import PostForm from "./components/PostForm";

export default function Publish() {
  return (
    <div className="flex flex-col justify-center md:pl-50 md:px-52 px-20 md:w-full h-full  mb-10 gap-10">
      <PostForm />
      <div className="flex flex-col gap-2">
        <h2 className="text-[#E10D0D]">TOMA EN CUENTA</h2>
        <p className="text-black">
          No se permiten escenas de desnudez ni contenido creado con la
          intención de causar gratificación sexual. Esto incluye (sin carácter
          restrictivo) escenas de desnudez total o parcial y representaciones
          gráficas de actos sexuales. Tampoco se permiten escenas de violencia
          excesiva o contenido gráfico creado con la intención de conmocionar y
          ofender a los lectores. Esto incluye escenas violentas y sangrientas
          prolongadas. Hay más información al respecto AQUÍ
        </p>
        <div className="flex flex-col mt-3 ">
          <div className="flex gap-3">
            <input type="checkbox" />

            <label className="text-black">
              Acepto lo Política de la comnidad y la Política de privacidad de
              Ruminet.
            </label>
          </div>
          <div className="flex gap-3">
            <input className="accent-pink-500" type="checkbox" />

            <label className="text-black">
              Marca esta casilla si tu serie contiene temas o situaciones de
              adultos y se recomienda para audiencias maduras.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
