"use client";
import BasicPricingYearly from "@/components/pricing-card/yearly/PricingCardYearly";
import PremiumPricingYearly from "@/components/pricing-card/yearly/PremiumPricingYearly";
import ProPricingYearly from "@/components/pricing-card/yearly/ProPricingYearly";
import { useParams } from "next/navigation";
import { basicPlan, premiumPlan, proPlan } from "../constants/methodPayments";
import PricingCardMonthly from "@/components/pricing-card/monthly/PricingCardMonthly";
import PricingCardYearly from "@/components/pricing-card/yearly/PricingCardYearly";

export default function PricingCard() {
  const { id } = useParams();

  if (id === "basic-monthly") {
    return <PricingCardMonthly plan={basicPlan}/>;
  }

  if (id === "pro-monthly") {
    return <PricingCardMonthly plan={proPlan} />;
  }

  if (id === "premium-monthly") {
    return <PricingCardMonthly plan={premiumPlan} />;
  }

  if (id === "basic-yearly") {
    return <BasicPricingYearly plan={basicPlan} isYearly={true} />;
  }

  if (id === "pro-yearly") {
    return <PricingCardYearly  plan={proPlan} isYearly={true} />;
  }

  if (id === "premium-yearly") {
    return <PricingCardYearly plan={premiumPlan} isYearly={true} />;
  }
}
