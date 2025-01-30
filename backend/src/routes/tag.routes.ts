import { Router } from "express";
import { getTags, createTag, updateTag, deleteTag, getTagById } from "../controllers/tag.controller";

const router = Router();

router.get("/", getTags);
router.get("/:id", getTagById);
router.post("/", createTag);
router.put("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;