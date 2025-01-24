import { z } from 'zod';

export enum UserRole {
    CREATOR = 'Creator',
    ADMIN = 'Admin',
    LECTOR = 'Lector'
}

export const UserSchema = z.object({
    username: z.string().min(3, "El nombre de usuario debe tener al menos 3 caracteres"),
    email: z.string().email("Email inválido"),
    role: z.nativeEnum(UserRole),
});

export const UserUpdateSchema = UserSchema.partial();

export type IUser = z.infer<typeof UserSchema>;