"use client"
import { useState } from "react";
import PricingCard from "./components/PricingCard";
import { PaymentSuccesful } from "./components/SuccessfullPay";
import { PaymentForm } from "./components/PaymentForm";

export default function MethodPayment() {
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  if (isSuccessfully) return <PaymentSuccesful />;

  return (
    <div className="flex  gap-20 justify-center px-52 items-center mt-10 mb-10">
      <PricingCard />
      <PaymentForm setIsSuccessfully={setIsSuccessfully}/>
    </div>
  );
}
