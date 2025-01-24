import { CallbackError, Schema, model } from 'mongoose';
import { IUser, UserRole, UserSchema, UserUpdateSchema } from '../validations/user';


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