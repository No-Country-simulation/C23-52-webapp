"use client"

import React, { useState } from "react";
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
import { useForm } from "react-hook-form";
import { z } from "zod";
import ImagesDrop from "./ImagesDrop";
import CommunityPolicy from "./CommunityPolicy";
import { Loader2 } from "lucide-react";

export const postFormSchema = z.object({
  title: z.string().min(1, "El titulo es obligatorio"),
  sinopsis: z.string().min(5, "Debe contener minimo 5 letras"),
  email: z.string().email("Correo Invalido").min(6, "El correo es obligatorio"),
});

export const PostForm = ({ setIsSuccessfully }) => {
    const [isLoading, setIsLoading] = useState(false);
  
  const form = useForm({
    resolver: zodResolver(postFormSchema),
    mode: "onBlur",
    defaultValues: {
      title: "",
      sinopsis: "",
      email: "",
    },
  });

  const onSubmit = form.handleSubmit((data) => {
    setIsLoading(true)
    setTimeout(() => {
      setIsSuccessfully(true);
    }, 2000);
  });
  
  return (
    <div className="p-5">
      <div>
        <Form {...form}>
          <form className="flex  flex-col gap-y-2" onSubmit={onSubmit}>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comic Title</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              name="sinopsis"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Sinopsis</FormLabel>
                  <FormControl>
                    <Input type="text" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="flex-col gap-x-3">
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
              <p className="text-black mb-10">
                Necesitamos una direccion de email para contactarte por temas
                relacionados con tu trabajo
              </p>
            </div>
            <ImagesDrop/>
            
            <CommunityPolicy/>

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
    </div>
    
  );
};

// export default function PostForm() {
//   return (
//     <>
//       <form className=" text-black flex flex-col">
//         <label className="mt-3" htmlFor="Genero">
//           Genero
//         </label>
//         <select
//           autoFocus
//           className="w-[100px] border rounded-lg p-1"
//           name=""
//           id="Genero"
//         >
//           <option value="Novela">Novela</option>
//           <option value="Novela">Terror</option>
//           <option value="Novela">Anime</option>
//         </select>
//         <label className="mt-3" htmlFor="title">
//           Titulo de la serie
//         </label>
//         <input className="px-1 border rounded-lg p-1" id="title" type="text" />
//         <label className="mt-3" htmlFor="sinopsis">
//           Sinopsis
//         </label>
//         <textarea className="border rounded-lg px-1.5 py-0.5" id="sinopsis" />
//         <label className="mt-3" htmlFor="email">
//           Email
//         </label>
//         <input className="border rounded-lg p-1 mb-2" id="email" type="email" />

       
       
//       </form>
//     </>
//   );
// }
