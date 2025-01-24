import express from "express";
import chapterController from "../controllers/chapter.controller"  
import upload from "../utils/upload";

const router = express.Router();

const PATH_CHAPTER = "/chapter";

router.post(PATH_CHAPTER, upload.array("files"), chapterController.createChapter);
router.post(`${PATH_CHAPTER}/mock`, upload.array("files"),chapterController.createMockChapter);


export default router;