// import express from "express";
// import comicController from "../controllers/comic.controller";

// const router = express.Router();

// const PATH_COMIC = "/comic";

// router.post(PATH_COMIC, comicController.createComic)

// export default router;
import { Router } from "express";
import { cacheMiddleware } from '../middlewares/cacheMiddleware';
import comicController from "../controllers/comic.controller";

const router = Router();
const PATH_COMIC = "/comic";

router.get(PATH_COMIC, comicController.getAllComics);
router.get(`${PATH_COMIC}/:id`, comicController.getComicById);
router.put(`${PATH_COMIC}/:id`, comicController.updateComic);
router.delete(`${PATH_COMIC}/:id`, comicController.deleteComic);

router.get("/", cacheMiddleware(1000 * 60 * 5), comicController.getComics);
router.post("/", comicController.createComic);

export default router; 
