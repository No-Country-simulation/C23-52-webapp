"use client";
import BasicPricingCard from "@/components/pricing-card/monthly/BasicPricingCardMonthly";
import PremiumPricingCard from "@/components/pricing-card/monthly/PremiumCardPricing";
import ProPricingCard from "@/components/pricing-card/monthly/ProPricingCard";
import BasicPricingYearly from "@/components/pricing-card/yearly/BasicPricingYearly";
import PremiumPricingYearly from "@/components/pricing-card/yearly/PremiumPricingYearly";
import ProPricingYearly from "@/components/pricing-card/yearly/ProPricingYearly";
import { useParams } from "next/navigation";
import React from "react";

export default function PricingCard() {
  const { id } = useParams();

  if (id === "basic-monthly") {
    return <BasicPricingCard />;
  }

  if (id === "pro-monthly") {
    return <ProPricingCard  />;
  }

  if (id === "premium-monthly") {
    return <PremiumPricingCard />;
  }

  if (id === "basic-yearly") {
    return <BasicPricingYearly isYearly={true} />;
  }

  if (id === "pro-yearly") {
    return <ProPricingYearly isYearly={true} />;
  }

  if (id === "premium-yearly") {
    return <PremiumPricingYearly isYearly={true} />;
  }
}
