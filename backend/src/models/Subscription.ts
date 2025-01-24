import { CallbackError, Schema, model } from 'mongoose';
import { ISubscription, SubscriptionSchema, SubscriptionUpdateSchema, SubscriptionType } from '../validations/subscription';

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