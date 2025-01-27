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
exports.ReadingHistory = void 0;
const mongoose_1 = require("mongoose");
const readingHistory_1 = require("../validations/readingHistory");
const readingHistorySchema = new mongoose_1.Schema({
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    comic: { type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic', required: true },
    pagesRead: { type: Number, required: true, min: 0 },
    completed: { type: Boolean, default: false },
    lastReadAt: { type: Date, required: true, default: Date.now }
}, {
    timestamps: true,
    versionKey: false
});
readingHistorySchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            readingHistory_1.ReadingHistorySchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
readingHistorySchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            readingHistory_1.ReadingHistoryUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.ReadingHistory = (0, mongoose_1.model)('ReadingHistory', readingHistorySchema);
