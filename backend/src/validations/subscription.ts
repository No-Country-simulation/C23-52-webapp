import { z } from 'zod';

export enum SubscriptionType {
    PREMIUM = 'Premium',
    BASIC = 'Basic',
    STANDARD = 'Standard'
}

export const SubscriptionSchema = z.object({
    user_id: z.any(),
    subscription_type: z.nativeEnum(SubscriptionType),
    subscription_expiration: z.date(),
});

export const SubscriptionUpdateSchema = SubscriptionSchema.partial();

export type ISubscription = z.infer<typeof SubscriptionSchema>;