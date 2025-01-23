import { Router } from "express";
import loginRoutes from "./login.routes";
import registerRoutes from "./register.routes";

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "¡Hola desde Express con TypeScript!" });
});

router.use(loginRoutes);
router.use(registerRoutes);

export default router;
