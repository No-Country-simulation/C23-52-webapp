import { Category } from "../models/Category";
import { ERROR_IDENTIFIERS, ERROR_MESSAGES } from "../utils/consts/serviceCategory";
import { ICategory } from "../validations/category";

/**
 * Crea una nueva categoría en la base de datos.
 *
 * @param {ICategory} category - La información de la categoría a crear.
 * @returns {Promise<ICategory>} - La categoría creada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la creación.
 */
export const createCategoryService = async (
  category: ICategory
): Promise<ICategory> => {
  try {
    const newCategory = new Category(category);

    await newCategory.save();

    return newCategory;
  } catch (error: any) {
    console.error("Error en createCategoryService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }
    if (error.code === 11000) {
      throw new Error("La categoría ya existe en la base de datos.");
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Obtiene todas las categorías de la base de datos.
 *
 * @returns {Promise<ICategory[]>} - Un array con todas las categorías.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getAllCategoryService = async (): Promise<ICategory[]> => {
  try {
    const categories = await Category.find().exec();

    return categories ? categories : [];
  } catch (error: any) {

    console.error("Error en getAllCategoryService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Obtiene una categoría por su ID.
 *
 * @param {string} id - El ID de la categoría a obtener.
 * @returns {Promise<ICategory>} - La categoría con el ID especificado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getCategoryByIdService = async (
  id: string
): Promise<ICategory> => {
  try {
    if (!id) {
      throw new Error("ID de categoría no proporcionado.");
    }
    const category = await Category.findById(id).exec();

    return category ? category : ({} as ICategory);
  } catch (error: any) {
    console.error("Error en getCategoryByIdService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Actualiza una categoría existente en la base de datos.
 *
 * @param {string} id - El ID de la categoría a actualizar.
 * @param {ICategory} category - Los datos de la categoría a actualizar.
 * @returns {Promise<ICategory>} - La categoría actualizada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const updateCategoryService = async (id: string, category: ICategory): Promise<ICategory> => {
  try {

    if (!id) {
      throw new Error("ID de categoría no proporcionado.");
    }
    const updatedCategory = await Category.findByIdAndUpdate(id, category).exec();

    if (!updatedCategory) {
      throw new Error("Categoría no encontrada para actualizar.");
    }

    return updatedCategory ? updatedCategory : ({} as ICategory);
  } catch (error: any) {
    console.error("Error en updateCategoryService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Elimina una categoría de la base de datos por su ID.
 *
 * @param {string} id - El ID de la categoría a eliminar.
 * @returns {Promise<ICategory>} - La categoría eliminada.
 * @throws {Error} - Lanza un error si no se proporciona el ID, si la categoría no es encontrada,
 *                   o si ocurre algún problema durante la eliminación.
 */

export const deleteCategoryService = async (id: string): Promise<ICategory> => {
  try {
    if (!id) {
      throw new Error("ID de categoría no proporcionado.");
    }
    const deletedCategory = await Category.findByIdAndDelete(id).exec();

    if (!deletedCategory) {
      throw new Error("Categoría no encontrada para eliminar.");
    }
    return deletedCategory ? deletedCategory : ({} as ICategory);
  } catch (error: any) {
    console.error("Error en deleteCategoryService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Verifica si una categoría ya existe en la base de datos según su nombre.
 * 
 * @param {string} name - El nombre de la categoría a verificar.
 * @returns {Promise<boolean>} - `true` si la categoría ya existe, `false` en caso contrario.
 * @throws {Error} - Lanza un error si el nombre no es proporcionado, si hay un problema de conexión con la base de datos, 
 *                   o si ocurre algún otro error inesperado.
 */

export const checkDuplicateCategoryService = async (
  name: string
): Promise<boolean> => {
  try {

    if (!name) {
      throw new Error("El nombre de la categoría es requerido.");
    }
    const findCategory = await Category.findOne({ name: name }).exec();

    return findCategory ? true : false;
  } catch (error: any) {
    console.error("Error en checkDuplicateCategoryService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};
