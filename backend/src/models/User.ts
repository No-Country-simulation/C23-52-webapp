import { CallbackError, Schema, model } from 'mongoose';
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
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const UserUpdateSchema = UserSchema.partial();

export type IUser = z.infer<typeof UserSchema>;

const userSchema = new Schema<IUser>(
    {
        username: { type: String, required: true, unique: true },
        email: { type: String, required: true, unique: true },
        role: { 
            type: String, 
            enum: Object.values(UserRole),
            required: true 
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

userSchema.pre('save', async function (next) {
    try {
        UserSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

userSchema.pre('findOneAndUpdate', async function (next) {
    try {
        UserUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const User = model<IUser>('User', userSchema); 