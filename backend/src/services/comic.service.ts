import {Comic, IComic} from "../models/Comic";

export const createComicService = async (comic: IComic): Promise<IComic> => {
  try {
    const newComic = new Comic(comic);

    await newComic.save();

    return newComic;

  } catch (error) {
    console.log(error);
    throw new Error("Error al crear el comic");
  }
}