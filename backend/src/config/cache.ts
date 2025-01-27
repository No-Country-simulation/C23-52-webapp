import { LRUCache } from 'lru-cache';

const options: LRUCache.Options<string, any, number> = {
    max: 500,
    ttl: 1000 * 60 * 5,
    allowStale: false,
    updateAgeOnGet: true,
    updateAgeOnHas: false
};

export const cache = new LRUCache(options); 