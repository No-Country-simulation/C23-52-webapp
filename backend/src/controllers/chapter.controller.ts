import { createChapterService, deleteChapterService, getAllChapterService, getChapterByIdService, updateChapterService } from "../services/chapter.service";
import { Request, Response } from "express";
import { uploadCloudinaryService } from "../services/uploadCloudinary.service";

const createChapter = async (req: Request, res: Response): Promise<void> => {
  try {
    const {
      nameChapter,
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
      nameChapter,
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

// const createMockChapter = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const {authorId, comicId} = req.body;

//     const files =  req.files as Express.Multer.File[];

//     if(!files) {
//       res.status(400).json({ message: "No se subió archivo" });
//       return;
//     }

//     const pageUrls = await uploadCloudinaryService({files: files, authorId: authorId, comicId:  comicId}); // array de urls de cloudinary

//     if (!pageUrls) {
//       res.status(400).json({ message: "Error al subir las imagenes" });
//       return;
//     }

//     const newChapter = {
//       idUser: authorId,
//       idComic: comicId,
//       page: pageUrls
//     }

//     console.log("newChapter", newChapter);

//     res.status(201).json({ message: "Capitulo creado", data: newChapter });

//   } catch (error) {
//     console.log("error createMockChapterController", error);
//     res.status(500).json({ message: "Error al crear el capitulo" });

//   }
// }

const getAllChapter = async (_req: Request, res: Response) => {
  try {
    const chapters = await getAllChapterService();

    if(chapters.length === 0) {
      res.status(200).json({message: 'No se encontraron capitulos', data: []});
      return;
    }

    res.status(200).json({message: 'Capitulos encontrados', data: chapters});

  } catch (error) {

    console.log("error getAllChapterController", error);
    res.status(500).json({ message: "Error al obtener los capitulos" });

    //añadir mas casos de error: httpStatus, mensaje
    
  }
}

const getChapterById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const chapter =  await getChapterByIdService(id);

    if(!chapter) {
      res.status(404).json({message: 'Capitulo no encontrado'});
    }

    res.status(200).json({message: 'Capitulo encontrado', data: chapter});
  } catch (error) {
    console.log("error getChapterByIdController", error);
    res.status(500).json({ message: "Error al obtener el capitulo" });

    //añadir mas casos de error: httpStatus, mensaje
  }
}

const updateChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const chapter = req.body;

    const chapterUpdate =  await updateChapterService(id, chapter);
    
    res.status(200).json({message: 'Capitulo actualizado'});
  } catch (error) {
    console.log("error updateChapterController", error);
    res.status(500).json({ message: "Error al actualizar el capitulo" });
  }
}

const deleteChapter = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    
    const chapterDelete =  await deleteChapterService(id);

    if(!chapterDelete) {
      res.status(404).json({message: 'Capitulo no encontrado'});
    }
    // verificar que no tenga capitulos asociados al comic

    res.status(200).json({message: 'Capitulo eliminado'});
  } catch (error) {
    console.log("error deleteChapterController", error);
    res.status(500).json({ message: "Error al eliminar el capitulo" }); 
  }
}






export default {
  createChapter,
  // createMockChapter,
  getAllChapter,
  getChapterById,
  updateChapter,
  deleteChapter,
};
