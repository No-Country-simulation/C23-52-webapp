"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionUpdateSchema = exports.SubscriptionSchema = exports.SubscriptionType = void 0;
const zod_1 = require("zod");
var SubscriptionType;
(function (SubscriptionType) {
    SubscriptionType["PREMIUM"] = "Premium";
    SubscriptionType["BASIC"] = "Basic";
    SubscriptionType["STANDARD"] = "Standard";
})(SubscriptionType || (exports.SubscriptionType = SubscriptionType = {}));
exports.SubscriptionSchema = zod_1.z.object({
    user_id: zod_1.z.any(),
    subscription_type: zod_1.z.nativeEnum(SubscriptionType),
    subscription_expiration: zod_1.z.date(),
});
exports.SubscriptionUpdateSchema = exports.SubscriptionSchema.partial();
