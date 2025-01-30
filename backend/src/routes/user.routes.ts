import { Router } from "express";
import * as UserController from "../controllers/user.controller";

const router = Router();

router.get("/:id", UserController.getUserById);
router.put("/:id", UserController.updateUser);
router.delete("/:id", UserController.deleteUser);

export default router;
