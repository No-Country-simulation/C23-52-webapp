import {Category} from "../models/Category";
import { ICategory } from "../validations/category";

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

export const getAllCategoryService = async (): Promise<ICategory[]> => {
  try {
    const categories = await Category.find().exec();    

    return categories ? categories : [];
  } catch (error) {
    console.log(error);    
    throw new Error("Error al obtener las categorías");    
  } 
};  

export const getCategoryByIdService = async (id: string): Promise<ICategory> => {
  try {
    const category = await Category.findById(id).exec();    

    return category ? category : ({} as ICategory);      
  } catch (error) {
    console.log(error);    
    throw new Error("Error al obtener la categoría");    
  } 
};


export const updateCategoryService = async (id: string): Promise<ICategory> => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id).exec();

    return updatedCategory ? updatedCategory : ({} as ICategory);
  } catch (error) {
    console.log(error);    
    throw new Error("Error al actualizar la categoría");    
  } 
};

export const deleteCategoryService = async (id: string): Promise<ICategory> => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(id).exec();

    return deletedCategory ? deletedCategory : ({} as ICategory);
  } catch (error) {
    console.log(error);    
    throw new Error("Error al eliminar la categoría");    
  }
};
