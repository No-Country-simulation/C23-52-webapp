import { Capitulo } from "../models/Capitulo";
import {
  ERROR_IDENTIFIERS,
  ERROR_MESSAGES,
} from "../utils/consts/serverChapter";
import { ICapitulo } from "../validations/capitulo";

/**
 * Crea un nuevo capítulo en la base de datos.
 *
 * @param {ICapitulo} chapter - Los datos del capítulo a crear.
 * @returns {Promise<ICapitulo>} - El capítulo creado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la creación.
 */
export const createChapterService = async (
  chapter: ICapitulo
): Promise<ICapitulo> => {
  try {
    const newChapter = new Capitulo(chapter);

    await newChapter.save();

    return newChapter;
  } catch (error: any) {
    console.error("Error en createChapterService:", error.message || error);

    // Manejo de errores específicos
    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    if (error.code === 11000) {
      throw new Error(ERROR_MESSAGES.CHAPTER.DUPLICATE_CHAPTER);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Obtiene todos los capítulos de la base de datos.
 *
 * @returns {Promise<ICapitulo[]>} - Un array con todos los capítulos.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getAllChapterService = async (): Promise<ICapitulo[]> => {
  try {
    const chapters = await Capitulo.find().exec();
    if (!chapters || chapters.length === 0) {
      throw new Error(ERROR_MESSAGES.CHAPTER.NOT_FOUND);
    }
    return chapters;
  } catch (error: any) {
    console.error("Error en getAllChapterService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Obtiene un capítulo de la base de datos por su id.
 *
 * @param {string} id - El id del capítulo a obtener.
 * @returns {Promise<ICapitulo>} - El capítulo con el id especificado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const getChapterByIdService = async (id: string): Promise<ICapitulo> => {
  try {
    if (!id) {
      throw new Error(ERROR_MESSAGES.CHAPTER.ID_REQUIRED);
    }
    const chapter = await Capitulo.findById(id).exec();
    if (!chapter) {
      throw new Error(ERROR_MESSAGES.CHAPTER.NOT_FOUND);
    }
    return chapter;
  } catch (error: any) {
    console.error("Error en getChapterByIdService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Actualiza un capítulo existente en la base de datos.
 *
 * @param {string} id - El id del capítulo a actualizar.
 * @param {ICapitulo} chapter - Los datos del capítulo a actualizar.
 * @returns {Promise<ICapitulo>} - El capítulo actualizado.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
export const updateChapterService = async (
  id: string,
  chapter: ICapitulo
): Promise<ICapitulo> => {
  try {
    if (!id) {
      throw new Error(ERROR_MESSAGES.CHAPTER.ID_REQUIRED);
    }
    const updatedChapter = await Capitulo.findByIdAndUpdate(id, chapter, {
      new: true,
    }).exec();
    if (!updatedChapter) {
      throw new Error(ERROR_MESSAGES.CHAPTER.NOT_FOUND);
    }
    return updatedChapter;
  } catch (error: any) {
    console.error("Error en updateChapterService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Elimina un capítulo de la base de datos por su id.
 *
 * @param {string} id - El id del capítulo a eliminar.
 * @returns {Promise<ICapitulo>} - El capítulo eliminado.
 * @throws {Error} - Lanza un error si el id no es proporcionado, si el capítulo no es encontrado, 
 *                   o si ocurre algún problema durante la eliminación.
 */

export const deleteChapterService = async (id: string): Promise<ICapitulo> => {
  try {
    if (!id) {
      throw new Error(ERROR_MESSAGES.CHAPTER.ID_REQUIRED);
    }
    const deletedChapter = await Capitulo.findByIdAndDelete(id).exec();
    if (!deletedChapter) {
      throw new Error(ERROR_MESSAGES.CHAPTER.NOT_FOUND);
    }
    return deletedChapter;
  } catch (error: any) {
    console.error("Error en deleteChapterService:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};

/**
 * Verifica si un capítulo ya existe en la base de datos según su nombre.
 * 
 * @param {string} name - El nombre del capítulo a verificar.
 * @returns {Promise<boolean>} - `true` si el capítulo ya existe, `false` en caso contrario.
 * @throws {Error} - Lanza un error si el nombre no es proporcionado, si hay un problema de conexión con la base de datos, o si ocurre algún otro error inesperado.
 */
export const checkDuplicateChapterService = async (
  name: string
): Promise<boolean> => {
  try {
    if (!name) {
      throw new Error("Datos insuficientes para verificar duplicados.");
    }
    const findChapter = await Capitulo.findOne({ nameChapter: name }).exec();
    return findChapter? true : false;
  } catch (error: any) {
    console.error(
      "Error en checkDuplicateChapterService:",
      error.message || error
    );

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      throw new Error(ERROR_MESSAGES.DATABASE.CONNECTION_ERROR);
    }
    throw new Error(ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR);
  }
};
