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
exports.Category = void 0;
const mongoose_1 = require("mongoose");
const category_1 = require("../validations/category");
const categorySchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true }
}, {
    timestamps: true,
    versionKey: false
});
categorySchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            category_1.CategorySchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
categorySchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            category_1.CategoryUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Category = (0, mongoose_1.model)('Category', categorySchema);
