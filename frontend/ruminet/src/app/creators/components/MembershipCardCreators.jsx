"use client";
import {
  PricingCard,
  PricingHeader,
  PricingSwitch,
} from "@/components/pricing-card/PricingCard";
import { useState } from "react";
import { plans } from "../constants/membership";

export default function MemberShipCardCreators() {
  const [isYearly, setIsYearly] = useState(false);
  const togglePricingPeriod = (value) => setIsYearly(parseInt(value) === 1);

  return (
    <div className="mt-5 mb-10">
      <PricingHeader
        title="Pricing Plans"
        subtitle="Choose the plan that's right for you"
      />
      <PricingSwitch onSwitch={togglePricingPeriod} />
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        {plans.map((plan) => {
          return <PricingCard url={plan.url} key={plan.id} {...plan} isYearly={isYearly} />;
        })}
      </section>
    </div>
  );
}
