"use client";
import { useState } from "react";
import PricingCard from "./components/PricingCard";
import { PaymentSuccesful } from "./components/SuccessfullPay";
import { PaymentForm } from "./components/PaymentForm";

export default function MethodPayment() {
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  if (isSuccessfully) return <PaymentSuccesful />;

  return (
    <div className="h-full md:h-screen md:px-52 px-2">
      <div className="flex justify-center md:mt-20 mt-10 gap-x-10 items-center">
        <div className="lg:block hidden">
        <PricingCard />
        </div>
        <div className="flex flex-col">
        <h2 className="text-2xl font-bold mb-4">Soporte y Pago Seguro</h2>
          <p className="text-base mb-5">
            Completa el siguiente formulario para finalizar tu pago. Tu
            información está protegida y el proceso es 100% seguro. Si tienes
            dudas, contáctanos.
          </p>
          <PaymentForm setIsSuccessfully={setIsSuccessfully} />

        </div>
      </div>
    </div>
  );
}
