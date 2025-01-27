"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cache = void 0;
const lru_cache_1 = require("lru-cache");
const options = {
    max: 500,
    ttl: 1000 * 60 * 5,
    allowStale: false,
    updateAgeOnGet: true,
    updateAgeOnHas: false
};
exports.cache = new lru_cache_1.LRUCache(options);
