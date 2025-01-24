import { cache } from '../config/cache';

export const getCachedData = async <T>(
    key: string,
    fetchData: () => Promise<T>,
    ttl: number = 1000 * 60 * 5
): Promise<T> => {
    const cachedData = cache.get(key) as T | undefined;

    if (cachedData) {
        console.log('✨ Cache hit:', key);
        return cachedData;
    }

    console.log('🔍 Cache miss:', key);
    const data = await fetchData();
    cache.set(key, data, { ttl });
    return data;
};

export const invalidateCache = (key: string) => {
    cache.delete(key);
    console.log('🗑️ Cache invalidado:', key);
}; 