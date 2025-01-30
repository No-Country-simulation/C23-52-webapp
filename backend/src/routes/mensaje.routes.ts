import { Router } from "express";
import { createMessage, getMessageById, getMessages } from "../controllers/mensaje.controller";

const router = Router();

router.get("/", getMessages);
router.get("/:id", getMessageById);
router.post("/", createMessage);

export default router;