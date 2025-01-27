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
exports.Tag = void 0;
const mongoose_1 = require("mongoose");
const tag_1 = require("../validations/tag");
const tagSchema = new mongoose_1.Schema({
    name: { type: String, required: true, unique: true },
    description: { type: String, required: true },
    comicsId: [{ type: mongoose_1.Schema.Types.ObjectId, ref: 'Comic' }]
}, {
    timestamps: true,
    versionKey: false
});
tagSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            tag_1.TagSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
tagSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            tag_1.TagUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Tag = (0, mongoose_1.model)('Tag', tagSchema);
