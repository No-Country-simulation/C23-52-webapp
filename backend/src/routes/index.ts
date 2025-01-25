import { Router } from "express";
import comicRoutes from "./comic.routes";
import tagRoutes from "./tag.routes";
import messageRoutes from "./mensaje.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express con TypeScript!" });
});

router.use("/comics", comicRoutes);
router.use("/tags", tagRoutes);
router.use("/mensajes", messageRoutes);

export default router;
