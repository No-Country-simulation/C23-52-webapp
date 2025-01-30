"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Comic = void 0;
const mongoose_1 = require("mongoose");
const comic_1 = require("../validations/comic");
const comicSchema = new mongoose_1.Schema({
    title: { type: String, required: true },
    type: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Category' }],
    isPublic: { type: Boolean, default: false },
    tagsGenero: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Tag' }],
    puntuacion: { type: Number, min: 1, max: 5, default: 1 },
    views: { type: Number, default: 0 }
}, {
    timestamps: true,
    versionKey: false
});
comicSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            comic_1.ComicSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
comicSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            comic_1.ComicUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Comic = (0, mongoose_1.model)('Comic', comicSchema);
