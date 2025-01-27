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
exports.Creator = void 0;
const mongoose_1 = require("mongoose");
const creator_1 = require("../validations/creator");
const creatorSchema = new mongoose_1.Schema({
    idUser: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
    publishedComic: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic' }]
}, {
    timestamps: true,
    versionKey: false
});
creatorSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            creator_1.CreatorSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
creatorSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            creator_1.CreatorUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Creator = (0, mongoose_1.model)('Creator', creatorSchema);
