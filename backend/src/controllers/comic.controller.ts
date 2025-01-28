import { Request, Response } from "express";
import { Comic } from "../models/Comic";
import { cache } from "../config/cache";
import {
  checkDuplicateComicService,
  createComicService,
  deleteComicService,
  getAllComicService,
  getComicByIdService,
  updateComicService,
} from "../services/comic.service";
import { ComicSchema } from "../validations/comic";
import {
  ERROR_IDENTIFIERS,
  ERROR_MESSAGES,
} from "../utils/consts/serviceComic";

const createComic = async (req: Request, res: Response) => {
  try {
    const dataComic = req.body;

    // validar campos obligatorios
    const dataValidate = ComicSchema.safeParse(dataComic);

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

    // verificar si ya hay duplicado en la base de datos:
    const comicExist = await checkDuplicateComicService(dataComic.title);
    if (comicExist) {
      res.status(400).json({ mensaje: "Comic ya existe" });
      return;
    }

    const newComic = await createComicService(dataComic);

    res
      .status(201)
      .json({ status: "success", data: newComic, message: "Comic creado" });

    // cache.delete("/api/comics");
    // res.status(201).json(nuevoComic);
  } catch (error: any) {
    console.error("Error en createChapter:", error.message || error);

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

const getComics = async (req: Request, res: Response) => {
  try {
    const comics = await Comic.find();

    //
    res.json(comics);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener comics", error });
  }
};

/**
 * Obtiene todos los comics existentes en la base de datos.
 *
 * @async
 * @function getAllComics
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna la lista de comics encontrados o un mensaje de error.
 * @throws {Error} - Error 503 si no hay conexión a la base de datos, error 504 si hay un timeout al obtener los datos o error 500 si ocurre un problema interno del servidor.
 */
const getAllComics = async (req: Request, res: Response): Promise<void> => {
  try {
    const comics = await getAllComicService();

    if (comics.length === 0) {
      res.status(200).json({ mensaje: "No hay comics", data: [] });
      return;
    }

    res.status(200).json({ mensaje: "Comics encontrados", data: comics });
  } catch (error: any) {
    console.error("Error en getAllComics:", error.message || error);

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
 * Obtiene un comic por su ID.
 *
 * @async
 * @function getComicById
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna el comic encontrado o un mensaje de error.
 * @throws {Error} - Error 400 si el ID de comic no se proporciona, error 404 si no se encuentra el comic o error 500 si ocurre un problema interno del servidor.
 */
const getComicById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.COMIC.ID_REQUIRED });
      return;
    }

    const comic = await getComicByIdService(id);

    if (!comic) {
      res.status(404).json({ mensaje: "Comic no encontrado" });
      return;
    }

    res.status(200).json({ mensaje: "Comic encontrado", data: comic });
  } catch (error: any) {
    console.error("Error en getComicById:", error.message || error);

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
 * Actualiza los datos de un comic, manejando cambios en sus campos.
 *
 * @async
 * @function updateComic
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna el comic actualizado o un mensaje de error.
 * @throws {Error} - Error 404 si el comic no existe, error 400 si no hay cambios, o error 500 si ocurre un problema interno.
 */

const updateComic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.COMIC.ID_REQUIRED });
      return;
    }

    const comic = await updateComicService(id, dataUpdate);

    res.status(200).json({ mensaje: "Comic actualizado", data: comic });
  } catch (error: any) {
    console.error("Error en updateComic:", error.message || error);

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
 * Elimina un comic existente de la base de datos.
 *
 * @async
 * @function deleteComic
 * @param {Request} req - Objeto de solicitud de Express.
 * @param {Response} res - Objeto de respuesta de Express.
 * @returns {Promise<void>} - Retorna un mensaje de éxito o un mensaje de error.
 * @throws {Error} - Error 400 si no se proporciona el ID, error 404 si el comic no se encuentra, 
 * error 503 si hay un problema de conexión a la base de datos, error 504 si hay un timeout, o
 * error 500 si ocurre un problema interno del servidor.
 */

const deleteComic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    if (!id) {
      res.status(400).json({ message: ERROR_MESSAGES.COMIC.ID_REQUIRED });
      return;
    }

    // verificar que no tenga categorias asociadas al comic, etc...
    const comic = await deleteComicService(id);

    res.status(200).json({ mensaje: "Comic eliminado", data: comic });
  } catch (error: any) {
    console.error("Error en deleteComic:", error.message || error);

    if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.NETWORK_ERROR)) {
      res.status(503).json({ message: ERROR_MESSAGES.DATABASE.CONNECTION_ERROR });
    } else if (error.message.includes(ERROR_IDENTIFIERS.DATABASE.TIMEOUT_ERROR)) {
      res.status(504).json({ message: ERROR_MESSAGES.DATABASE.TIMEOUT_ERROR });
    } else {
      res.status(500).json({ message: ERROR_MESSAGES.GENERAL.UNKNOWN_ERROR });
    }
  }
};

export default {
  createComic,
  getComics,
  getAllComics,
  getComicById,
  updateComic,
  deleteComic,
};
