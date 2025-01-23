import { Router } from "express";
import { LoginController } from "../controllers/login.controller";
import { checkJwt } from "../middlewares/auth.middleware";

export const PATH_LOGIN = "/login";

const router = Router();

router.post(PATH_LOGIN, checkJwt, LoginController);

export default router;
