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
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear comic", error });
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

const getAllComics = async (req: Request, res: Response): Promise<void> => {
  try {
    const comics = await getAllComicService();

    if (comics.length === 0) {
      res.status(200).json({ mensaje: "No hay comics", data: [] });
      return;
    }

    res.status(200).json({ mensaje: "Comics encontrados", data: comics });
  } catch (error) {
    console.log("Error en getAllComics", error);
    res.status(500).json({ mensaje: "Error al obtener los comics", error });
  }
};

const getComicById = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;

    const comic = await getComicByIdService(id);

    if (!comic) {
      res.status(404).json({ mensaje: "Comic no encontrado" });
      return;
    }

    res.status(200).json({ mensaje: "Comic encontrado", data: comic });
  } catch (error) {
    console.log("Error en getComicById", error);
    res.status(500).json({ mensaje: "Error al obtener el comic", error });
  }
};

const updateComic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;
    const dataUpdate = req.body;

    const comic = await updateComicService(id, dataUpdate);

    res.status(200).json({ mensaje: "Comic actualizado", data: comic });
  } catch (error) {
    console.log("Error en updateComic", error);
    res.status(500).json({ mensaje: "Error al actualizar el comic", error });
  }
};

const deleteComic = async (req: Request, res: Response): Promise<void> => {
  try {
    const { id } = req.params;


    // verificar que no tenga categorias asociadas al comic, etc...
    const comic = await deleteComicService(id);

    res.status(200).json({ mensaje: "Comic eliminado", data: comic });
  } catch (error) {
    console.log("Error en deleteComic", error);
    res.status(500).json({ mensaje: "Error al eliminar el comic", error });
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
