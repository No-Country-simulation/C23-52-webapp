import { z } from 'zod';

export const LectorSchema = z.object({
    idUser: z.any(),
    credits: z.number().min(0),
});

export const LectorUpdateSchema = LectorSchema.partial();

export type ILector = z.infer<typeof LectorSchema>;