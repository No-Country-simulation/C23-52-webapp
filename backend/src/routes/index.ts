import { Router } from "express";
import comicRoutes from "./comic.routes";
import tagRoutes from "./tag.routes";
import messageRoutes from "./mensaje.routes";
import loginRoutes from "./login.routes";
import registerUserRoutes from "./register.routes";
import userRoutes from "./user.routes";
import cloudinaryRoutes from "./cloudinary.routes";
import chapterRoutes from "./chapter.routes";
import categoryRoutes from "./category.routes";

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


router.use(cloudinaryRoutes);
router.use(chapterRoutes);
router.use(categoryRoutes);

export default router;
