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
exports.invalidateCache = exports.getCachedData = void 0;
const cache_1 = require("../config/cache");
const getCachedData = (key_1, fetchData_1, ...args_1) => __awaiter(void 0, [key_1, fetchData_1, ...args_1], void 0, function* (key, fetchData, ttl = 1000 * 60 * 5) {
    const cachedData = cache_1.cache.get(key);
    if (cachedData) {
        console.log('✨ Cache hit:', key);
        return cachedData;
    }
    console.log('🔍 Cache miss:', key);
    const data = yield fetchData();
    cache_1.cache.set(key, data, { ttl });
    return data;
});
exports.getCachedData = getCachedData;
const invalidateCache = (key) => {
    cache_1.cache.delete(key);
    console.log('🗑️ Cache invalidado:', key);
};
exports.invalidateCache = invalidateCache;
