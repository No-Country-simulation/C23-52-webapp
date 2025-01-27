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
exports.Subscription = void 0;
const mongoose_1 = require("mongoose");
const subscription_1 = require("../validations/subscription");
const subscriptionSchema = new mongoose_1.Schema({
    user_id: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    subscription_type: {
        type: String,
        enum: Object.values(subscription_1.SubscriptionType),
        required: true
    },
    subscription_expiration: { type: Date, required: true }
}, {
    timestamps: true,
    versionKey: false
});
subscriptionSchema.pre('save', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            subscription_1.SubscriptionSchema.parse(this.toObject());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
subscriptionSchema.pre('findOneAndUpdate', function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            subscription_1.SubscriptionUpdateSchema.parse(this.getUpdate());
            next();
        }
        catch (error) {
            next(error);
        }
    });
});
exports.Subscription = (0, mongoose_1.model)('Subscription', subscriptionSchema);
