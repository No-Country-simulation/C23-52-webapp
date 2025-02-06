"use client"
import React from "react";
import { Controller } from "react-hook-form";

export default function CustomPaymentInput({
  name,
  control,
  type,
  label,
  error,
  placeholder
}) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <Controller
        name={name}
        control={control}
        render={({ field }) => 
          <input
            id={name}
            type={type}
            {...field}
            className={`w-full ${error?.message ? "border border-red-600" : ""} rounded-md px-1 mb-5 border`}
            placeholder={placeholder}
          />
        }
      />
      {error?.message && <p className="text-red-500">{error.message}</p>}
    </>
  );
}
