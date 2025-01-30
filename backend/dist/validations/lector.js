"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LectorUpdateSchema = exports.LectorSchema = void 0;
const zod_1 = require("zod");
exports.LectorSchema = zod_1.z.object({
    idUser: zod_1.z.any(),
    credits: zod_1.z.number().min(0),
});
exports.LectorUpdateSchema = exports.LectorSchema.partial();
