"use client";
import { basicPlan } from "@/app/method-payment/[id]/constants/methodPayments";
import { PricingView } from "../PricingView";

export default function BasicPricingYearly( {title, isYearly}) {
  return (
    <>
      <PricingView isYearly={isYearly}  key={title} {...basicPlan} />
    </>
  );
}
