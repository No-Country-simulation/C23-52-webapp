"use client";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { PaymentSuccesful } from "./SuccessfullPay";


export const formSchema = z.object({
  email: z.string().email("Correo Invalido").min(6, "El correo es obligatorio"),
  numbers: z
    .string()
    .min(16)
    .max(16)
    .transform((val) => parseInt(val)),
  date: z.string().transform((val) => parseInt(val)),

  final: z.string().transform((val) => parseInt(val)),
});

export const  PaymentForm = ({setIsSuccessfully}) => {

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      numbers: 0,
      date: 0,
      final: 0,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    console.log(data);
    setIsSuccessfully(true);
  });
  return (
    <div className="border p-5 rounded-lg">
      <div>
        <h1>Info</h1>
        <Form {...form}>
          <form className="flex  flex-col gap-y-2" onSubmit={onSubmit}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="numbers"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Numbers</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex gap-x-3">
              <FormField
                name="date"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Date</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                name="final"
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>CVV</FormLabel>
                    <FormControl>
                      <Input type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
