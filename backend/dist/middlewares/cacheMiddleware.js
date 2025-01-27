"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheMiddleware = void 0;
const cache_1 = require("../config/cache");
const cacheMiddleware = (duration) => {
    return (req, res, next) => {
        const key = req.originalUrl;
        const cachedResponse = cache_1.cache.get(key);
        if (cachedResponse) {
            console.log('✨ Sirviendo desde cache:', key);
            res.json(cachedResponse);
            return;
        }
        const originalJson = res.json;
        res.json = function (body) {
            cache_1.cache.set(key, body, {
                ttl: duration
            });
            return originalJson.call(this, body);
        };
        next();
    };
};
exports.cacheMiddleware = cacheMiddleware;
