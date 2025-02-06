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
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

export const formSchema = z.object({
  email: z.string().email("Correo Invalido").min(6, "El correo es obligatorio"),
  numbers: z
    .string()
    .min(16)
    .max(16)
    .transform((val) => parseInt(val)),
  date: z
    .string()
    .min(1, "La fecha es obligatoria")
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Formato inválido. Usa YYYY-MM-DD"),

  final: z.string().transform((val) => parseInt(val)),
});

export const PaymentForm = ({ setIsSuccessfully }) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      numbers: 0,
      date: "",
      final: 0,
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsSuccessfully(true);
    }, 2000);
  });
  return (
    <div className="border p-5 rounded-lg">
      <h1>Pagar con tarjeta</h1>
      <Form {...form}>
        <form className="flex  flex-col gap-y-5" onSubmit={onSubmit}>
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
                <FormLabel>Card Numbers</FormLabel>
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
                  <FormLabel>Expiration Date</FormLabel>
                  <FormControl>
                    <Input type="date" {...field} />
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
          {isLoading ? (
            <Button disabled>
              <Loader2 className="animate-spin" />
              Please wait
            </Button>
          ) : (
            <Button variant="outline" type="submit">
              Submit
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};
