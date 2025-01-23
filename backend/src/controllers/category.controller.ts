import { createCategoryService } from "../services/category.service";
import { Request, Response } from "express";

const createCategoryController = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const dataCategory = req.body;
    //validar req.body
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