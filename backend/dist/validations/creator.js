"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatorUpdateSchema = exports.CreatorSchema = void 0;
const zod_1 = require("zod");
exports.CreatorSchema = zod_1.z.object({
    idUser: zod_1.z.any(),
    publishedComic: zod_1.z.array(zod_1.z.any()),
});
exports.CreatorUpdateSchema = exports.CreatorSchema.partial();
