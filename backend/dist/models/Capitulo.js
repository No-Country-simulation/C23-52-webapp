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
exports.Capitulo = void 0;
const mongoose_1 = require("mongoose");
const capitulo_1 = require("../validations/capitulo");
const capituloSchema = new mongoose_1.Schema({
    idComic: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic', required: true },
    thumbnail: { type: String, required: true },
    nameComic: { type: String, required: true },
    description: { type: String, required: true },
    page: [{ type: String, required: true }],
    views: { type: Number, default: 0 },
    fechaLanzamiento: { type: Date, required: true, default: Date.now }
}, {
    timestamps: true,
    versionKey: false
});
capituloSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            capitulo_1.CapituloSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
capituloSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            capitulo_1.CapituloUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Capitulo = (0, mongoose_1.model)('Capitulo', capituloSchema);
