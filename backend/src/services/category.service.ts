import {Category} from "../models/Category";
import {ICategory} from "../validations/category";

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