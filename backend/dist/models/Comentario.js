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
exports.Comentario = void 0;
const mongoose_1 = require("mongoose");
const comentario_1 = require("../validations/comentario");
const comentarioSchema = new mongoose_1.Schema({
    message: { type: String, required: true },
    idUser: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    idCapitulos: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Capitulo', required: true }
}, {
    timestamps: true,
    versionKey: false
});
comentarioSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            comentario_1.ComentarioSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
comentarioSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            comentario_1.ComentarioUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Comentario = (0, mongoose_1.model)('Comentario', comentarioSchema);
