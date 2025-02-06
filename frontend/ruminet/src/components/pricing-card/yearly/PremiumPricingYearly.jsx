"use client";
import { premiumPlan } from "@/app/method-payment/[id]/constants/methodPayments";
import { PricingView } from "../PricingView";

export default function PremiumPricingYearly(
  isYearly,
  title,
) {
  return (
    <div>
    
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        <PricingView
          isYearly={isYearly}
          key={title}
          {...premiumPlan}
        />
        
      </section>
    </div>
  );
}
