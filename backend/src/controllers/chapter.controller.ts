import { createChapterService } from "../services/chapter.service";
import { Request, Response } from "express";
import { uploadCloudinaryService } from "../services/uploadCloudinary.service";

const createChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      idComic,
      thumbnail,
      nameComic,
      description,
      views,
      fechaLanzamiento,
    } = req.body;

    const files =  req.files as Express.Multer.File[];

    if(!files) {
      res.status(400).json({ message: "No se subió archivo" });
      return;
    }

    const pageUrls = await uploadCloudinaryService({files: files, authorId: idComic, comicId: idComic}); // array de urls de cloudinary

    if (!pageUrls) {
      res.status(400).json({ message: "Error al subir las imagenes" });
      return;
    }
    const newChapter = await createChapterService({
      idComic,
      thumbnail,
      nameComic,
      description,
      page: pageUrls,
      views,
      fechaLanzamiento,
    });

    console.log(newChapter);
    res.status(201).json({ message: "Capitulo creado", data: newChapter });
  } catch (error) {
    console.log("error createChapterController", error);
    res.status(500).json({ message: "Error al crear el capitulo" });
  }
};

const createMockChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const {authorId, comicId} = req.body;

    const files =  req.files as Express.Multer.File[];

    if(!files) {
      res.status(400).json({ message: "No se subió archivo" });
      return;
    }

    const pageUrls = await uploadCloudinaryService({files: files, authorId: authorId, comicId:  comicId}); // array de urls de cloudinary

    if (!pageUrls) {
      res.status(400).json({ message: "Error al subir las imagenes" });
      return;
    }

    const newChapter = {
      idUser: authorId,
      idComic: comicId,
      page: pageUrls
    }

    console.log("newChapter", newChapter);

    res.status(201).json({ message: "Capitulo creado", data: newChapter });

  } catch (error) {
    
  }
}

export default {
  createChapter,
  createMockChapter
};
