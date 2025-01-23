import express from "express";
import categoryController from "../controllers/category.controller";

const router = express.Router();

const PATH_CATEGORY = "/category";

router.post(PATH_CATEGORY, categoryController.createCategoryController);

export default router;