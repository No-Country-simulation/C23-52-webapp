import { CallbackError, Schema, model } from 'mongoose';
import { z } from 'zod';

export const ReadingHistorySchema = z.object({
    // _id: z.string(),
    user: z.any(),
    comic: z.any(),
    pagesRead: z.number().min(0, "El número de páginas no puede ser negativo"),
    completed: z.boolean(),
    lastReadAt: z.date(),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional()
});

export const ReadingHistoryUpdateSchema = ReadingHistorySchema.partial();

export type IReadingHistory = z.infer<typeof ReadingHistorySchema>;

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