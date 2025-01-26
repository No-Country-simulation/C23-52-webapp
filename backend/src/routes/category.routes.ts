import express from "express";
import categoryController from "../controllers/category.controller";

const router = express.Router();

const PATH_CATEGORY = "/category";

router.get(PATH_CATEGORY, categoryController.getAllCategory);
router.get(`${PATH_CATEGORY}/:id`, categoryController.getCategoryById);
router.post(PATH_CATEGORY, categoryController.createCategory);
router.put(`${PATH_CATEGORY}/:id`, categoryController.updateCategory);
router.delete(`${PATH_CATEGORY}/:id`, categoryController.deleteCategory);

export default router;