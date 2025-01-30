import {
  checkDuplicateChapterService,
  createChapterService,
  deleteChapterService,
  getAllChapterService,
  getChapterByIdService,
  updateChapterService,
} from "../services/chapter.service";
import { Request, Response } from "express";
import { uploadCloudinaryService } from "../services/uploadCloudinary.service";
import { CapituloSchema } from "../validations/capitulo";
import { ERROR_IDENTIFIERS, ERROR_MESSAGES } from "../utils/consts/serverChapter";

/**
 * Crea un nuevo capítulo en la base de datos.
 * 
 * @param {Request} req - La petición con los datos del capítulo y las imágenes.
 * @param {Response} res - La respuesta con el resultado de la creación del capítulo.
 * @returns {Promise<void>} - Promesa que se resuelve al terminar la creación del capítulo.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la creación.
 */
const createChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataChapter = req.body;
    const files = req.files as Express.Multer.File[];
    

    if (!files || !dataChapter.idComic || !dataChapter.nameChapter) {
      res.status(400).json({ message: "No hay imagen en la petición" });
      return;
    }

    const idComic = dataChapter.idComic;
    const nameChapter = dataChapter.nameChapter;

     // Verificar si el capítulo ya existe
    const existChapter = await checkDuplicateChapterService(nameChapter);
    if(existChapter) {
      res.status(400).json({ message: "El capitulo ya existe" });
      return;
    }

    // Subir imágenes a Cloudinary
    const pageUrls = await uploadCloudinaryService({
      files: files,
      comicId: idComic,
      nameChapter: nameChapter,
    });

    if (!pageUrls) {
      res.status(400).json({ message: "Error al subir las imagenes" });
      return;
    }

    dataChapter.page = pageUrls; // urls de cloudinary
    dataChapter.views = Number(dataChapter.views); // Convierte views a number
    dataChapter.fechaLanzamiento = new Date(dataChapter.fechaLanzamiento); // Convierte date a objeto Date

    // Validar los datos del capítulo
    const dataValidate = CapituloSchema.safeParse(dataChapter);
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

    // Crear capítulo
    const newChapter = await createChapterService(dataValidate.data);

    res.status(201).json({ message: "Capitulo creado", data: newChapter });
  } catch (error: any) {
    console.error("Error en createChapter:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};


/**
 * Obtiene todos los capítulos de la base de datos.
 *
 * @function getAllChapter
 * @param {Request} _req - Objeto de solicitud de Express (no se utiliza).
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve nada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
const getAllChapter = async (_req: Request, res: Response) => {
  try {
    const chapters = await getAllChapterService();

    if (chapters.length === 0) {
      res
        .status(200)
        .json({ message: "No se encontraron capitulos", data: [] });
      return;
    }

    res.status(200).json({ message: "Capitulos encontrados", data: chapters });
  } catch (error: any) {
    console.error("Error en getAllChapter:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Obtiene un capítulo de la base de datos por su id.
 *
 * @function getChapterById
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve nada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
const getChapterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "ID de capítulo no proporcionado" });
      return;
    }

    const chapter = await getChapterByIdService(id);

    if (!chapter) {
      res.status(404).json({ message: "Capitulo no encontrado" });
    }

    res.status(200).json({ message: "Capitulo encontrado", data: chapter });
  } catch (error: any) {
    console.error("Error en getChapterById:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Actualiza un capítulo existente en la base de datos.
 *
 * @function updateChapter
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve nada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
const updateChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chapter = req.body;

    if (!id) {
      res.status(400).json({ message: "ID de capítulo no proporcionado" });
      return;
    }

    const updatedChapter = await updateChapterService(id, chapter);

    if (!updatedChapter) {
      res.status(404).json({ message: "Capítulo no encontrado para actualizar" });
      return;
    }

    res.status(200).json({ message: "Capitulo actualizado", data: updatedChapter });
  } catch (error: any) {
    console.error("Error en updateChapter:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

/**
 * Elimina un capítulo existente en la base de datos.
 *
 * @function deleteChapter
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - No devuelve nada.
 * @throws {Error} - Lanza un error si ocurre algún problema durante la consulta.
 */
const deleteChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: "ID de capítulo no proporcionado" });
      return;
    }

    const deletedChapter = await deleteChapterService(id);

    if (!deletedChapter) {
      res.status(404).json({ message: "Capítulo no encontrado para eliminar" });
      return;
    }

    // verificar que no tenga capitulos asociados al comic

    res.status(200).json({ message: "Capitulo eliminado" });
  } catch (error: any) {
    console.error("Error en deleteChapter:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

export default {
  createChapter,
  getAllChapter,
  getChapterById,
  updateChapter,
  deleteChapter,
};
