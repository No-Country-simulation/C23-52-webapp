"use client";
import { PricingView } from "../PricingView";

export default function PricingCardYearly( {title, isYearly, plan}) {
  return (
    <>
      <PricingView isYearly={isYearly}  key={title} {...plan} />
    </>
  );
}
