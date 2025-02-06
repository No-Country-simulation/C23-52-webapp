import { z } from "zod";

export const schema = z.object({
  email: z.string().email("Correo Invalido").min(6, "El correo es obligatorio"),
    numero: z.number().min(10, "Minimo 10 numeros") ,
    dayExp: z.number().min(1, "minimo 1 numero"),
    yearExp: z.number().min(4, "minimo 4 num"),
    cvv: z.number().min(3, "minimo 3 num"),
});
