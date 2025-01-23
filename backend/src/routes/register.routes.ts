import { Router } from "express";
import { CreateUserController } from "../controllers/register.controller";
import { checkJwt } from "../middlewares/auth.middleware";

export const PATH_REGISTER = "/register";

const router = Router();

router.post(PATH_REGISTER, checkJwt, CreateUserController);

export default router;
