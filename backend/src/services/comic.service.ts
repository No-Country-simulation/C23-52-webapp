import { Comic } from "../models/Comic";
import { ERROR_IDENTIFIERS, ERROR_MESSAGES } from "../utils/consts/serviceComic";
import { IComic } from "../validations/comic";

/**
 * Crea un nuevo cómic en la base de datos.
 *
 * @param {IComic} comic - Los datos del cómic a crear.
 * @returns {Promise<IComic>} - El cómic creado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la creación.
 */
export const createComicService = async (comic: IComic): Promise<IComic> => {
  try {
    const newComic = new Comic(comic);

    await newComic.save();

    return newComic;
  } catch (error: any) {
    console.error("Error en createComicService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }
    if (error.code === 11000) {
      throw new Error("El título del cómic ya existe en la base de datos.");
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Obtiene todos los cómics de la base de datos.
 *
 * @async
 * @function getAllComicService
 * @returns {Promise<IComic[]>} - Un array de cómics.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getAllComicService = async (): Promise<IComic[]> => {
  try {
    const comics = await Comic.find().exec();

    return comics ? comics : [];
  } catch (error: any) {
    console.error("Error en getAllComicService:", error.message || error);

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
 * Obtiene un cómic de la base de datos por su id.
 *
 * @param {string} id - El ID del cómic a obtener.
 * @returns {Promise<IComic>} - El cómic obtenido.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getComicByIdService = async (id: string): Promise<IComic> => {
  try {
    if (!id) {
      throw new Error("El ID del cómic es requerido.");
    }
    const comic = await Comic.findById(id).exec();

    return comic ? comic : ({} as IComic);
  } catch (error: any) {
    console.error("Error en getComicByIdService:", error.message || error);

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
 * Actualiza un cómic existente en la base de datos.
 *
 * @param {string} id - El ID del cómic a actualizar.
 * @param {IComic} comic - Los datos del cómic a actualizar.
 * @returns {Promise<IComic>} - El cómic actualizado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */

export const updateComicService = async (id: string, comic: IComic): Promise<IComic> => {
  try {
    if (!id) {
      throw new Error("El ID del cómic es requerido.");
    }
    const updatedComic = await Comic.findByIdAndUpdate(id, comic).exec();

    return updatedComic ? updatedComic : ({} as IComic);
  } catch (error: any) {
    console.error("Error en updateComicService:", error.message || error);

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
 * Elimina un cómic de la base de datos por su ID.
 *
 * @param {string} id - El ID del cómic a eliminar.
 * @returns {Promise<IComic>} - El cómic eliminado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la eliminación.
 */

export const deleteComicService = async (id: string): Promise<IComic> => {
  try {
    if (!id) {
      throw new Error("El ID del cómic es requerido.");
    }

    const deletedComic = await Comic.findByIdAndDelete(id).exec();

    return deletedComic ? deletedComic : ({} as IComic);
  } catch (error: any) {
    console.error("Error en deleteComicService:", error.message || error);

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
 * Verifica si un cómic ya existe en la base de datos según su título.
 *
 * @param {string} title - El título del cómic a verificar.
 * @returns {Promise<boolean>} - `true` si el cómic ya existe, `false` en caso contrario.
 * @throws {Error} - Lanza un error si el título no es proporcionado, si hay un problema de conexión con la base de datos, 
 * o si ocurre algún otro error inesperado.
 */

export const checkDuplicateComicService = async (title: string): Promise<boolean> => {
  try {
    if (!title) {
      throw new Error("El título del cómic es requerido.");
    }

    const comic = await Comic.findOne({title: title}).exec();

    return comic ? true : false;
  } catch (error: any) {
    console.error("Error en checkDuplicateComicService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR);
    }

    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
}
