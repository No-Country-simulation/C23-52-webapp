import { Router } from "express";
import comicRoutes from "./comic.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express con TypeScript!" });
});

router.use("/comics", comicRoutes);

export default router;
