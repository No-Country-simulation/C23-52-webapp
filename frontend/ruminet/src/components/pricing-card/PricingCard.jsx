"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const PricingHeader = ({ title, subtitle }) => (
  <section className="text-center">
    <h2 className="text-3xl font-bold">{title}</h2>
    <p className="text-xl pt-1">{subtitle}</p>
  </section>
);

export const PricingSwitch = ({ onSwitch }) => (
  <Tabs defaultValue="0" className="w-40 mx-auto" onValueChange={onSwitch}>
    <TabsList className="py-6 px-2">
      <TabsTrigger value="0" className="text-base">
        Monthly
      </TabsTrigger>
      <TabsTrigger value="1" className="text-base">
        Yearly
      </TabsTrigger>
    </TabsList>
  </Tabs>
);

export const PricingCard = ({
  isYearly,
  title,
  monthlyPrice,
  yearlyPrice,
  description,
  features,
  popular,
  exclusive,
  yearlyUrl,
  monthlyUrl,
  label
}) => {
  const selectedUrl = isYearly ? yearlyUrl : monthlyUrl;

  return (
    <Card
      className={cn(
        `w-72 flex flex-col justify-between py-1 ${
          popular ? "border-rose-400" : "border-zinc-700"
        } mx-auto sm:mx-0`,
        {
          "animate-background-shine bg-white dark:bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] transition-colors":
            exclusive,
        }
      )}
    >
      <div>
        <CardHeader className="pb-8 pt-4">
          <CardTitle className="text-zinc-700 dark:text-zinc-300 text-lg">
            {title}
          </CardTitle>
          <div className="flex gap-0.5">
            <h3 className="text-3xl font-bold">
              {isYearly ? "$" + yearlyPrice : "$" + monthlyPrice}
            </h3>
            <span className="flex flex-col justify-end text-sm mb-1">
              {isYearly ? "/year" : "/month"}
            </span>
          </div>
          <CardDescription className="pt-1.5 h-12">{description}</CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          {features?.map((feature) => (
            <CheckItem key={feature} text={feature} />
          ))}
        </CardContent>
      </div>
      <CardFooter className="mt-2">
        <Link href={selectedUrl} className="relative p-2 bg-[#E10D0D] hover:bg-[#B00B0B] inline-flex w-full items-center justify-center rounded-md text-white dark:bg-white px-6 font-medium dark:text-black transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
          <div className="absolute -inset-0.5 -z-10 rounded-lg bg-gradient-to-b from-[#c7d2fe] to-[#8678f9] opacity-75 blur" />
          {label}
        </Link>
      </CardFooter>
    </Card>
  );
};

export const CheckItem = ({ text }) => (
  <div className="flex gap-2">
    <CheckCircle2 size={18} className="my-auto text-green-400" />
    <p className="pt-0.5 text-zinc-700 dark:text-zinc-300 text-sm">{text}</p>
  </div>
);

