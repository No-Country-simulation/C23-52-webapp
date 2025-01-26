import { Capitulo} from "../models/Capitulo";
import { ICapitulo } from "../validations/capitulo";

export const createChapterService = async (
  chapter: ICapitulo
): Promise<ICapitulo> => {
  try {
    const newChapter = new Capitulo(chapter);

    await newChapter.save();

    return newChapter;
  } catch (error) {
    console.log("error en createChapterService",error);
    throw new Error("Error al crear el capítulo");
  }
};

export const getAllChapterService = async (): Promise<ICapitulo[]> => {
  try {
    const chapters = await Capitulo.find().exec();

    return chapters ? chapters : [];
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los capítulos");
  }
};

export const getChapterByIdService = async (id: string): Promise<ICapitulo> => {
  try {
    const chapter = await Capitulo.findById(id).exec();

    return chapter ? chapter : ({} as ICapitulo);
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener el capítulo");
  }
};

export const updateChapterService = async (id: string, chapter: ICapitulo): Promise<ICapitulo> => {
  try {
    const updatedChapter = await Capitulo.findByIdAndUpdate(id, chapter).exec();

    return updatedChapter ? updatedChapter : ({} as ICapitulo);
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar el capítulo");
  }
};

export const deleteChapterService = async (id: string): Promise<ICapitulo> => {
  try {
    const deletedChapter = await Capitulo.findByIdAndDelete(id).exec();

    return deletedChapter ? deletedChapter : ({} as ICapitulo);
  } catch (error) {
    console.log(error);
    throw new Error("Error al eliminar el capítulo");
  }
};

export const checkDuplicateChapterService = async (name: string): Promise<boolean> => {
  try {
    const findChapter = await Capitulo.findOne({name: name}).exec();
    
    return findChapter ? true : false;
  } catch (error) {
    throw new Error("Error al verificar el capítulo");
  }
}
