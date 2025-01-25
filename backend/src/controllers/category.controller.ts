import {
  checkDuplicateCategoryService,
  createCategoryService,
  deleteCategoryService,
  getAllCategoryService,
  getCategoryByIdService,
  updateCategoryService,
} from "../services/category.service";
import { Request, Response } from "express";
import { CategorySchema } from "../validations/category";

const createCategory = async (
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

const getAllCategory = async (req: Request, res: Response) => {
  try {
    const categories =  await getAllCategoryService();

    if(categories.length === 0) {
      res.status(200).json({message: 'No se encontraron categorias', data: []});
    }

    res.status(200).json({message: 'Categorias encontradas', data: categories});
  } catch (error: any) {
    console.error("Error en getAllCategory:", error.message);

    if (error.message.includes("Timeout")) {
      return res.status(504).json({ message: "El tiempo de espera para procesar la solicitud ha expirado." });
    }

    if (error.message.includes("Servicio no disponible")) {
      return res.status(503).json({ message: "Servicio no disponible. Inténtalo más tarde." });
    }

    res.status(500).json({ message: "Error inesperado al obtener las categorías." });
  }
};

const getCategoryById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }

    res.status(200).json({ message: "Categoría encontrada", data: category });
  } catch (error: any) {
    console.error("Error en getCategoryById:", error.message);

    if (error.message.includes("Timeout")) {
      return res.status(504).json({ message: "El tiempo de espera para procesar la solicitud ha expirado." });
    }

    if (error.message.includes("Servicio no disponible")) {
      return res.status(503).json({ message: "Servicio no disponible. Inténtalo más tarde." });
    }

    res.status(500).json({ message: "Error inesperado al obtener la categoría." });
  }
};

const updateCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }

    const updatedCategory = await updateCategoryService(id);

    res.status(200).json({ message: "Categoría actualizada", data: updatedCategory });
  } catch (error: any) {
    console.error("Error en updateCategory:", error.message);

    if (error.message.includes("Timeout")) {
      return res.status(504).json({ message: "El tiempo de espera para procesar la solicitud ha expirado." });
    }

    if (error.message.includes("Servicio no disponible")) {
      return res.status(503).json({ message: "Servicio no disponible. Inténtalo más tarde." });
    }

    res.status(500).json({ message: "Error inesperado al actualizar la categoría." });
  }
}

const deleteCategory = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }

    await deleteCategoryService(id);

    res.status(200).json({ message: "Categoría eliminada" });
  } catch (error: any) {
    console.error("Error en deleteCategory:", error.message);

    if (error.message.includes("Timeout")) {
      return res.status(504).json({ message: "El tiempo de espera para procesar la solicitud ha expirado." });
    }

    if (error.message.includes("Servicio no disponible")) {
      return res.status(503).json({ message: "Servicio no disponible. Inténtalo más tarde." });
    }

    res.status(500).json({ message: "Error inesperado al eliminar la categoría." });
  }
}


export default {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory
};
