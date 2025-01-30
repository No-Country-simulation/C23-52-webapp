import express from "express";
import chapterController from "../controllers/chapter.controller"  
import upload from "../utils/upload";

const router = express.Router();

const PATH_CHAPTER = "/chapter";

router.get(PATH_CHAPTER, chapterController.getAllChapter);
router.get(`${PATH_CHAPTER}/:id`, chapterController.getChapterById);

router.post(PATH_CHAPTER, upload.array("page"), chapterController.createChapter);
router.put(`${PATH_CHAPTER}/:id`, chapterController.updateChapter);
router.delete(`${PATH_CHAPTER}/:id`, chapterController.deleteChapter);


// router.post(`${PATH_CHAPTER}/mock`, upload.array("files"),chapterController.createMockChapter);


export default router;