import express from "express";
import categoryController from "../controllers/category.controller";
import {
  CreateServerSuccessSchema,
  createStandardResponses,
  registry,
} from "../utils/swaggerHelpers";
import {
  CategoryInputPathParamsSchema,
  CreateCategoryInputBodySchema,
  DeleteCategoryOutputSchema,
  GetAllCategoryOutputSchema,
  GetCategoryOutputSchema,
  UpdateCategoryInputBodySchema,
} from "../validations/category";

const router = express.Router();

const PATH_CATEGORY = "/category";

// Registrar rutas para categorías en Swagger
registry.registerPath({
  method: "get",
  path: `/api${PATH_CATEGORY}/`,
  tags: ["Categories"],
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetAllCategoryOutputSchema),
    "Lista de categorías"
  ),
});

registry.registerPath({
  method: "get",
  path: `/api${PATH_CATEGORY}/{id}`,
  tags: ["Categories"],
  request: {
    params: CategoryInputPathParamsSchema,
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCategoryOutputSchema),
    "Categoría encontrada"
  ),
});

registry.registerPath({
  method: "post",
  path: `/api${PATH_CATEGORY}/`,
  tags: ["Categories"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateCategoryInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCategoryOutputSchema),
    "Categoría creada"
  ),
});

registry.registerPath({
  method: "put",
  path: `/api${PATH_CATEGORY}/{id}`,
  tags: ["Categories"],
  request: {
    params: CategoryInputPathParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: UpdateCategoryInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCategoryOutputSchema),
    "Categoría actualizada"
  ),
});

registry.registerPath({
  method: "delete",
  path: `/api${PATH_CATEGORY}/{id}`,
  tags: ["Categories"],
  request: {
    params: CategoryInputPathParamsSchema,
  },
  responses: createStandardResponses(
    DeleteCategoryOutputSchema,
    "Categoría eliminada"
  ),
});

router.get(PATH_CATEGORY, categoryController.getAllCategory);
router.get(`${PATH_CATEGORY}/:id`, categoryController.getCategoryById);
router.post(PATH_CATEGORY, categoryController.createCategory);
router.put(`${PATH_CATEGORY}/:id`, categoryController.updateCategory);
router.delete(`${PATH_CATEGORY}/:id`, categoryController.deleteCategory);

export default router;
