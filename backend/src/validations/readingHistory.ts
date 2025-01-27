import { z } from 'zod';

export const ReadingHistorySchema = z.object({
    user: z.any(),
    comic: z.any(),
    pagesRead: z.number().min(0, "El número de páginas no puede ser negativo"),
    completed: z.boolean(),
    lastReadAt: z.date(),
});

export const ReadingHistoryUpdateSchema = ReadingHistorySchema.partial();

export type IReadingHistory = z.infer<typeof ReadingHistorySchema>;