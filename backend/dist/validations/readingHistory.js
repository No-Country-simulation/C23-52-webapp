"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReadingHistoryUpdateSchema = exports.ReadingHistorySchema = void 0;
const zod_1 = require("zod");
exports.ReadingHistorySchema = zod_1.z.object({
    user: zod_1.z.any(),
    comic: zod_1.z.any(),
    pagesRead: zod_1.z.number().min(0, "El número de páginas no puede ser negativo"),
    completed: zod_1.z.boolean(),
    lastReadAt: zod_1.z.date(),
});
exports.ReadingHistoryUpdateSchema = exports.ReadingHistorySchema.partial();
