"use client"
import { useUser } from "@auth0/nextjs-auth0/client";
import React from "react";

export default function Protected() {
  const { user } = useUser();

  if (!user) {
    console.log("Tenes que logearte");
  } else {
    return <div>Protected</div>;
  }
}
