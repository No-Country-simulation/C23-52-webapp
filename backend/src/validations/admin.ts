import { z } from 'zod';

export const AdminSchema = z.object({
    idUser: z.any(),
});

export const AdminUpdateSchema = AdminSchema.partial();

export type IAdmin = z.infer<typeof AdminSchema>;