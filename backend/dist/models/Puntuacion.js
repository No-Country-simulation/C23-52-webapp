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
exports.Puntuacion = void 0;
const mongoose_1 = require("mongoose");
const puntuacion_1 = require("../validations/puntuacion");
const puntuacionSchema = new mongoose_1.Schema({
    puntuacion: { type: Number, required: true, min: 1, max: 5 },
    idUser: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    idComic: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic', required: true }
}, {
    timestamps: true,
    versionKey: false
});
puntuacionSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            puntuacion_1.PuntuacionSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
puntuacionSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            puntuacion_1.PuntuacionUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Puntuacion = (0, mongoose_1.model)('Puntuacion', puntuacionSchema);
