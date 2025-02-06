"use client";
import { useState } from "react";
import { PaymentForm } from "../../method-payment/[id]/components/PaymentForm";
import { PaymentSuccesful } from "../../method-payment/[id]/components/SuccessfullPay";
import SupportPage from "./components/SupportForm";

export default function Support() {
  const [isSuccessfully, setIsSuccessfully] = useState(false);
  if (isSuccessfully) return <PaymentSuccesful />;

  return (
    <div className="h-full md:h-screen justify-center items-center flex flex-col w-full md:px-52 px-2">
      <div className="md:w-[500px] md:mt-0 mt-10 mb-5">
        <SupportPage />
        <PaymentForm setIsSuccessfully={setIsSuccessfully} />
      </div>
    </div>
  );
}
