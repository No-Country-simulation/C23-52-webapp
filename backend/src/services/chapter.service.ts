import {Capitulo, ICapitulo} from "../models/Capitulo"

export const createChapterService = async (chapter: ICapitulo): Promise<ICapitulo> => {
  try {
    const newChapter = new Capitulo(chapter);

    await newChapter.save();

    return newChapter;

  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el capítulo");
  }
}