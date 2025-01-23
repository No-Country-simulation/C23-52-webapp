import { createComicService } from "../services/comic.service";
import { Request, Response } from "express";


const createComic = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataComic = req.body;

    const newComic = await createComicService(dataComic);

    console.log(newComic);
    res.status(201).json({ message: 'Comic creado', data: newComic });
  } catch (error) {
    console.log("error createComicController", error);

    res.status(500).json({ message: "Error al crear el comic" });
  }
};

export default {
  createComic,
};
