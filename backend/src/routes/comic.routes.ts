import { Router } from "express";
import { cacheMiddleware } from '../middlewares/cacheMiddleware';
import { getComics, createComic } from "../controllers/comic.controller";

const router = Router();

router.get("/", cacheMiddleware(1000 * 60 * 5), getComics);
router.post("/", createComic);

export default router; 