"use client";
import { basicPlan } from "@/app/method-payment/[id]/constants/methodPayments";
import { PricingView } from "../PricingView";

export default function PricingCardMonthly( title) {
  return (
    <>
      <PricingView  key={title} {...basicPlan} />
    </>
  );
}
