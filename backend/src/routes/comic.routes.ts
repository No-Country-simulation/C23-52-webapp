import { Router } from "express";
import { cacheMiddleware } from "../middlewares/cacheMiddleware";
import comicController from "../controllers/comic.controller";
import {
  CreateServerSuccessSchema,
  createStandardResponses,
  registry,
} from "../utils/swaggerHelpers";
import {
  ComicInputPathParamsSchema,
  CreateComicInputBodySchema,
  DeleteComicOutputSchema,
  GetAllComicOutputSchema,
  GetComicOutputSchema,
  UpdateComicInputBodySchema,
} from "../validations/comic";

const router = Router();
const PATH_COMIC = "/comic";

registry.registerPath({
  method: "get",
  path: `/api${PATH_COMIC}/`,
  tags: ["Comics"],
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetAllComicOutputSchema),
    "Lista de comics"
  ),
});

registry.registerPath({
  method: "get",
  path: `/api${PATH_COMIC}/{id}`,
  tags: ["Comics"],
  request: {
    params: ComicInputPathParamsSchema,
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetComicOutputSchema),
    "Comic encontrado"
  ),
});

registry.registerPath({
  method: "post",
  path: `api${PATH_COMIC}/`,
  tags: ["Comics"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateComicInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetComicOutputSchema),
    "Comic creado"
  ),
});

registry.registerPath({
  method: "put",
  path: `/api${PATH_COMIC}/{id}`,
  tags: ["Comics"],
  request: {
    params: ComicInputPathParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: UpdateComicInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetComicOutputSchema),
    "Comic actualizado"
  ),
});

registry.registerPath({
  method: "delete",
  path: `/api${PATH_COMIC}/{id}`,
  tags: ["Comics"],
  request: {
    params: ComicInputPathParamsSchema,
  },
  responses: createStandardResponses(
    DeleteComicOutputSchema,
    "Comic eliminado"
  ),
});

router.get(PATH_COMIC, comicController.getAllComics);
router.get(`${PATH_COMIC}/:id`, comicController.getComicById);
router.put(`${PATH_COMIC}/:id`, comicController.updateComic);
router.delete(`${PATH_COMIC}/:id`, comicController.deleteComic);

router.post(PATH_COMIC, comicController.createComic);

// router.get("/", cacheMiddleware(1000 * 60 * 5), comicController.getComics);
// router.post("/", comicController.createComic);

export default router;
