"use client";
import { useParams } from "next/navigation";
import SupportCreatorPay from "./SupportCreatorPay";

export default function SupportPage() {
  const { id } = useParams();

  if (id === "500") {
    return <SupportCreatorPay text={"500"}/>;
  }

  if (id === "1000") {
    return <SupportCreatorPay text={"1000"}  />;
  }

  if (id === "5000") {
    return <SupportCreatorPay text={"5000"}  />;
  }

}
