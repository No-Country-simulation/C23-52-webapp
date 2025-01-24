import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export enum SubscriptionType {
    PREMIUM = 'Premium',
    BASIC = 'Basic',
    STANDARD = 'Standard'
}

export const SubscriptionSchema = z.object({
    // _id: z.string(),
    user_id: z.any(),
    subscription_type: z.nativeEnum(SubscriptionType),
    subscription_expiration: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const SubscriptionUpdateSchema = SubscriptionSchema.partial();

export type ISubscription = z.infer<typeof SubscriptionSchema>;

const subscriptionSchema = new Schema<ISubscription>(
    {
        user_id: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        subscription_type: {
            type: String,
            enum: Object.values(SubscriptionType),
            required: true
        },
        subscription_expiration: { type: Date, required: true }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

subscriptionSchema.pre('save', async function (next) {
    try {
        SubscriptionSchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

subscriptionSchema.pre('findOneAndUpdate', async function (next) {
    try {
        SubscriptionUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const Subscription = model<ISubscription>('Subscription', subscriptionSchema); 