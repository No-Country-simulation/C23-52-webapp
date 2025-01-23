import express from "express";
import comicController from "../controllers/comic.controller";

const router = express.Router();

const PATH_COMIC = "/comic";

router.post(PATH_COMIC, comicController.createComic)

export default router;