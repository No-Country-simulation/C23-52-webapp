import {
  checkDuplicateCategoryService,
  createCategoryService,
} from "../services/category.service";
import { Request, Response } from "express";
import { CategorySchema } from "../validations/category";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dataCategory = req.body;

    const dataValidate = CategorySchema.safeParse(dataCategory);

    if (dataValidate.error) {
      const error = dataValidate.error.errors.map((err) => ({
        path: err.path[0],
        message: err.message,
      }));

      res.status(400).json({
        message: "Error en la validacion de datos",
        error: error,
      });
    }

    const findCategory = await checkDuplicateCategoryService(dataCategory.name);

    if (findCategory) {
      res.status(400).json({ message: "La categoría ya existe" });
    }

    const newCategory = await createCategoryService(dataCategory);

    console.log(newCategory);

    res.status(201).json({ message: "Categoría creada", data: newCategory });
  } catch (error) {
    console.log("error createCategoryController", error);

    res.status(500).send({ message: "Error al crear la categoría" });
  }
};

export default {
  createCategoryController,
};
