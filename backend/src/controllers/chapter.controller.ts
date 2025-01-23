import {createChapterService} from "../services/chapter.service"
import { Request, Response } from "express";

const createChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const dataChapter =  req.body;

    const newChapter = await createChapterService(dataChapter);

    console.log(newChapter);
    res.status(201).json({ message: 'Capitulo creado', data: newChapter });
  } catch (error) {
    console.log("error createChapterController", error);
    res.status(500).json({ message: "Error al crear el capitulo" });
  }
}


export default {
  createChapter,
};