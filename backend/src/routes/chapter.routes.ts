import express from "express";
import chapterController from "../controllers/chapter.controller"  

const router = express.Router();

const PATH_CHAPTER = "/chapter";

router.post(PATH_CHAPTER, chapterController.createChapter);


export default router;