import { Router } from "express";
import comicRoutes from "./comic.routes";
import tagRoutes from "./tag.routes";
import messageRoutes from "./mensaje.routes";
import loginRoutes from "./login.routes";
import registerUserRoutes from "./register.routes";
import userRoutes from "./user.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express con TypeScript!" });
});

router.use("/comics", comicRoutes);
router.use("/tags", tagRoutes);
router.use("/mensajes", messageRoutes);
router.use("/user", userRoutes);
router.use(loginRoutes);
router.use(registerUserRoutes);

export default router;
