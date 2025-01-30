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
import {
  ERROR_IDENTIFIERS,
  ERROR_MESSAGES,
} from "../utils/consts/serviceCategory";

/**
 * Crea una nueva categoría en la base de datos.
 *
 * @async
 * @function createCategory
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna un mensaje de éxito o un mensaje de error.
 * @throws {Error} - Error 500 si ocurre un problema interno del servidor.
 */
const createCategory = async (req: Request, res: Response): Promise<void> => {
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
      return;
    }

    const findCategory = await checkDuplicateCategoryService(dataCategory.name);

    if (findCategory) {
      res.status(400).json({ message: "La categoría ya existe" });
      return;
    }

    const newCategory = await createCategoryService(dataCategory);

    res.status(201).json({ message: "Categoría creada", data: newCategory });
  } catch (error: any) {
    console.error("Error en createCategory:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)
    ) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Obtiene todas las categorías de la base de datos.
 *
 * @async
 * @function getAllCategory
 * @param {Request} _req - Objeto de solicitud de Express (no se utiliza).
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna un mensaje de éxito o un mensaje de error.
 * @throws {Error} - Error 500 si ocurre un problema interno del servidor.
 */
const getAllCategory = async (_req: Request, res: Response): Promise<void> => {
  try {
    const categories = await getAllCategoryService();

    if (categories.length === 0) {
      res
        .status(200)
        .json({ message: "No se encontraron categorias", data: [] });
    }

    res
      .status(200)
      .json({ message: "Categorias encontradas", data: categories });
  } catch (error: any) {
    console.error("Error en getAllCategory:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)
    ) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Obtiene una categoría por su ID.
 *
 * @async
 * @function getCategoryById
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna la categoría encontrada o un mensaje de error.
 * @throws {Error} - Error 400 si el ID de la categoría no se proporciona, error 404 si no se encuentra la categoría o error 500 si ocurre un problema interno del servidor.
 */
const getCategoryById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.CATEGORY.ID_REQUIRED });
      return;
    }

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }

    res.status(200).json({ message: "Categoría encontrada", data: category });
  } catch (error: any) {
    console.error("Error en getCategoryById:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)
    ) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Actualiza una categoría por su ID.
 *
 * @async
 * @function updateCategory
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna la categoría actualizada o un mensaje de error.
 * @throws {Error} - Error 400 si el ID de la categoría no se proporciona, error 404 si no se encuentra la categoría o error 500 si ocurre un problema interno del servidor.
 */
const updateCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.CATEGORY.ID_REQUIRED });
      return;
    }

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
      return;
    }

    const updatedCategory = await updateCategoryService(id, dataUpdate);

    res
      .status(200)
      .json({ message: "Categoría actualizada", data: updatedCategory });
  } catch (error: any) {
    console.error("Error en updateCategory:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)
    ) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Elimina una categoría por su ID.
 *
 * @async
 * @function deleteCategory
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna un mensaje de éxito o un mensaje de error.
 * @throws {Error} - Error 400 si el ID de la categoría no se proporciona,
 *                   error 404 si no se encuentra la categoría,
 *                   error 503 o 504 si ocurre un problema con la base de datos,
 *                   o error 500 si ocurre un problema interno del servidor.
 */

const deleteCategory = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.CATEGORY.ID_REQUIRED });
      return;
    }

    const category = await getCategoryByIdService(id);

    if (!category) {
      res.status(404).json({ message: "Categoría no encontrada" });
    }

    await deleteCategoryService(id);

    res.status(200).json({ message: "Categoría eliminada" });
  } catch (error: any) {
    console.error("Error en deleteCategory:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res
        .status(503)
        .json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (
      error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)
    ) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

export default {
  createCategory,
  getAllCategory,
  getCategoryById,
  updateCategory,
  deleteCategory,
};
