import { Comic } from "../models/Comic";
import { IComic } from "../validations/comic";

export const createComicService = async (comic: IComic): Promise<IComic> => {
  try {
    const newComic = new Comic(comic);

    await newComic.save();

    return newComic;
  } catch (error) {
    console.log("Error en createComicService",error);
    throw new Error("Error al crear el comic");
  }
};

export const getAllComicService = async (): Promise<IComic[]> => {
  try {
    const comics = await Comic.find().exec();

    return comics ? comics : [];
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener los comics");
  }
};

export const getComicByIdService = async (id: string): Promise<IComic> => {
  try {
    const comic = await Comic.findById(id).exec();

    return comic ? comic : ({} as IComic);
  } catch (error) {
    console.log(error);
    throw new Error("Error al obtener el comic");
  }
};

export const updateComicService = async (id: string, comic: IComic): Promise<IComic> => {
  try {
    const updatedComic = await Comic.findByIdAndUpdate(id, comic).exec();

    return updatedComic ? updatedComic : ({} as IComic);
  } catch (error) {
    console.log(error);
    throw new Error("Error al actualizar el comic");
  }
};

export const deleteComicService = async (id: string): Promise<IComic> => {
  try {
    const deletedComic = await Comic.findByIdAndDelete(id).exec();

    return deletedComic ? deletedComic : ({} as IComic);
  } catch (error) {
    console.log(error);
    throw new Error("Error al eliminar el comic");
  }
};

export const checkDuplicateComicService = async (title: string): Promise<boolean> => {
  try {
    const comic = await Comic.findOne({title: title}).exec();

    return comic ? true : false;
  } catch (error) {
    console.log("Error en checkDuplicateComicService",error);
    throw new Error("Error al verificar el comic");
  }
}
