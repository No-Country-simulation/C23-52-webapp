import { Category } from "../models/Category";
import { ICategory } from "../validations/category";

export const createCategoryService = async (
  category: ICategory
): Promise<ICategory> => {
  try {
    const newCategory = new Category(category);

    await newCategory.save();

    return newCategory;
  } catch (error) {
    console.log("error en en createCategoryService", error);
    throw new Error("Error al crear la categoría");
  }
};

export const getAllCategoryService = async (): Promise<ICategory[]> => {
  try {
    const categories = await Category.find().exec();

    return categories ? categories : [];
  } catch (error: any) {

    if (error.name === "MongoNetworkError") {
      console.error("Error de conexión a la base de datos:", error);
      throw new Error("Error al conectar con la base de datos.");
    }

    if (error.name === "TimeoutError") {
      console.error("Error de tiempo de espera:", error);
      throw new Error("La solicitud tardó demasiado en procesarse.");
    }

    if (error.name === "ValidationError") {
      console.error("Error de validación en los datos:", error);
      throw new Error("Datos malformados enviados al servidor.");
    }

    console.error("Error inesperado en getAllCategoryService:", error);
    throw new Error("Error inesperado al obtener las categorías.");
  }
};

export const getCategoryByIdService = async (
  id: string
): Promise<ICategory> => {
  try {
    const category = await Category.findById(id).exec();

    return category ? category : ({} as ICategory);
  } catch (error: any) {
    if (error.name === "MongoNetworkError") {
      console.error("Error de conexión a la base de datos:", error);
      throw new Error("Error al conectar con la base de datos.");
    }

    if (error.name === "TimeoutError") {
      console.error("Error de tiempo de espera:", error);
      throw new Error("La solicitud tardó demasiado en procesarse.");
    }

    if (error.name === "ValidationError") {
      console.error("Error de validación en los datos:", error);
      throw new Error("Datos malformados enviados al servidor.");
    }

    console.error("Error inesperado en getCategoryByIdService:", error);
    throw new Error("Error inesperado al obtener la categoría.");
  }
};

export const updateCategoryService = async (id: string, category: ICategory): Promise<ICategory> => {
  try {
    const updatedCategory = await Category.findByIdAndUpdate(id, category).exec();

    return updatedCategory ? updatedCategory : ({} as ICategory);
  } catch (error: any) {
    if (error.name === "MongoNetworkError") {
      console.error("Error de conexión a la base de datos:", error);
      throw new Error("Error al conectar con la base de datos.");
    }

    if (error.name === "TimeoutError") {
      console.error("Error de tiempo de espera:", error);
      throw new Error("La solicitud tardó demasiado en procesarse.");
    }

    if (error.name === "ValidationError") {
      console.error("Error de validación en los datos:", error);
      throw new Error("Datos malformados enviados al servidor.");
    }

    console.error("Error inesperado en updateCategoryService:", error);
    throw new Error("Error inesperado al actualizar la categoría.");
  }
};

export const deleteCategoryService = async (id: string): Promise<ICategory> => {
  try {
    const deletedCategory = await Category.findByIdAndDelete(id).exec();

    return deletedCategory ? deletedCategory : ({} as ICategory);
  } catch (error: any) {
    if (error.name === "MongoNetworkError") {
      console.error("Error de conexión a la base de datos:", error);
      throw new Error("Error al conectar con la base de datos.");
    }

    if (error.name === "TimeoutError") {
      console.error("Error de tiempo de espera:", error);
      throw new Error("La solicitud tardó demasiado en procesarse.");
    }

    if (error.name === "ValidationError") {
      console.error("Error de validación en los datos:", error);
      throw new Error("Datos malformados enviados al servidor.");
    }

    console.error("Error inesperado en deleteCategoryService:", error);
    throw new Error("Error inesperado al eliminar la categoría.");
  }
};

export const checkDuplicateCategoryService = async (
  name: string
): Promise<boolean> => {
  try {
    const findCategory = await Category.findOne({ name: name }).exec();

    return findCategory ? true : false;
  } catch (error: any) {
    if (error.name === "MongoNetworkError") {
      console.error("Error de conexión a la base de datos:", error);
      throw new Error("Error al conectar con la base de datos.");
    }

    if (error.name === "TimeoutError") {
      console.error("Error de tiempo de espera:", error);
      throw new Error("La solicitud tardó demasiado en procesarse.");
    }

    if (error.name === "ValidationError") {
      console.error("Error de validación en los datos:", error);
      throw new Error("Datos malformados enviados al servidor.");
    }

    console.error("Error inesperado en checkDuplicateCategoryService:", error);
    throw new Error("Error inesperado al verificar la categoría.");
  }
};
