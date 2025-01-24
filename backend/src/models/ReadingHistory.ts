import { CallbackError, Schema, model } from 'mongoose';
import { IReadingHistory, ReadingHistorySchema, ReadingHistoryUpdateSchema } from '../validations/readingHistory';

const readingHistorySchema = new Schema<IReadingHistory>(
    {
        user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        comic: { type: Schema.Types.ObjectId, ref: 'Comic', required: true },
        pagesRead: { type: Number, required: true, min: 0 },
        completed: { type: Boolean, default: false },
        lastReadAt: { type: Date, required: true, default: Date.now }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

readingHistorySchema.pre('save', async function (next) {
    try {
        ReadingHistorySchema.parse(this.toObject());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

readingHistorySchema.pre('findOneAndUpdate', async function (next) {
    try {
        ReadingHistoryUpdateSchema.parse(this.getUpdate());
        next();
    } catch (error: any) {
        next(error as CallbackError);
    }
});

export const ReadingHistory = model<IReadingHistory>('ReadingHistory', readingHistorySchema); 