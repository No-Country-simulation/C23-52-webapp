"use client";
import {
  proPlan
} from "@/app/method-payment/[id]/constants/methodPayments";

import { PricingView } from "../PricingView";

export default function ProPricingCard( title) {
  return (
    <div>
      <section className="flex flex-col sm:flex-row sm:flex-wrap justify-center gap-8 mt-8">
        <PricingView  key={title} {...proPlan} />
      </section>
    </div>
  );
}
