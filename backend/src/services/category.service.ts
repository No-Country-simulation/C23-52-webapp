import {Category, ICategory} from "../models/Category";

export const createCategoryService = async (category: ICategory): Promise<ICategory> => {
  try {
    const newCategory = new Category(category);

    await newCategory.save();

    return newCategory;

  } catch (error) {
    console.log(error);
    throw new Error("Error al crear la categoría");
  }
}