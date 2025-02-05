"use client";
import Image from "next/image";
import { useState } from "react";
import { PaymentSuccesful } from "../method-payment/[id]/components/SuccessfullPay";
import { PaymentForm } from "../method-payment/[id]/components/PaymentForm";

export default function Support() {
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  if (isSuccessfully) return <PaymentSuccesful />;

  return (
    <div className="h-full md:h-screen justify-center items-center flex flex-col w-full md:px-52 px-2">
      <div className="md:w-[500px] md:mt-0 mt-10 mb-5">
          <h2 className="text-2xl font-bold mb-4">Soporte y Pago Seguro</h2>
          <p className="text-base mb-5">
            Completa el siguiente formulario para finalizar tu pago. Tu
            información está protegida y el proceso es 100% seguro. Si tienes
            dudas, contáctanos.
          </p>
        <PaymentForm setIsSuccessfully={setIsSuccessfully} />
      </div>
    </div>
  );
}
