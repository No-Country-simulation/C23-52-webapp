import { Request, Response, NextFunction } from 'express';
import { cache } from '../config/cache';

export const cacheMiddleware = (duration: number) => {
    return (req: Request, res: Response, next: NextFunction):void => {
        const key = req.originalUrl;
        const cachedResponse = cache.get(key);

        if (cachedResponse) {
            console.log('✨ Sirviendo desde cache:', key);
            res.json(cachedResponse);
            return;
        }

        const originalJson = res.json;
        res.json = function (body) {
            cache.set(key, body, {
                ttl: duration
            });
            return originalJson.call(this, body);
        };

        next();
    };
}; 