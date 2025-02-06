import React from "react";
import CardFeaturedCreators from "./CardFeaturedCreators";
import CustomButton from "@/components/CustomButton";

export default function FeaturedCreators() {
  return (
    <section className="bg-slate-200 h-full w-full">
      <div className=" py-5 flex-col px-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Featured Creators</h2>
          <CustomButton text={"Ver +"} />
        </div>
        <CardFeaturedCreators />
      </div>
    </section>
  );
}
