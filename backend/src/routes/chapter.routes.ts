import express from "express";
import chapterController from "../controllers/chapter.controller";
import upload from "../utils/upload";
import {
  CreateServerSuccessSchema,
  createStandardResponses,
  registry,
} from "../utils/swaggerHelpers";
import {
  CapituloInputPathParamsSchema,
  CreateCapituloInputBodySchema,
  GetAllCapituloOutputSchema,
  GetCapituloOutputSchema,
} from "../validations/capitulo";

const router = express.Router();

const PATH_CHAPTER = "/chapter";

registry.registerPath({
  method: "get",
  path: `/api${PATH_CHAPTER}/`,
  tags: ["Chapters"],
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetAllCapituloOutputSchema),
    "Lista de capitulos"
  ),
});

registry.registerPath({
  method: "get",
  path: `/api${PATH_CHAPTER}/{id}`,
  tags: ["Chapters"],
  request: {
    params: CapituloInputPathParamsSchema,
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCapituloOutputSchema),
    "Capitulo encontrado"
  ),
});

registry.registerPath({
  method: "post",
  path: `/api${PATH_CHAPTER}/`,
  tags: ["Chapters"],
  request: {
    body: {
      content: {
        "application/json": {
          schema: CreateCapituloInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCapituloOutputSchema),
    "Capitulo creado"
  ),
});

registry.registerPath({
  method: "put",
  path: `/api${PATH_CHAPTER}/{id}`,
  tags: ["Chapters"],
  request: {
    params: CapituloInputPathParamsSchema,
    body: {
      content: {
        "application/json": {
          schema: CreateCapituloInputBodySchema,
        },
      },
    },
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCapituloOutputSchema),
    "Capitulo actualizado"
  ),
});

registry.registerPath({
  method: "delete",
  path: `/api${PATH_CHAPTER}/{id}`,
  tags: ["Chapters"],
  request: {
    params: CapituloInputPathParamsSchema,
  },
  responses: createStandardResponses(
    CreateServerSuccessSchema(GetCapituloOutputSchema),
    "Capitulo eliminado"
  ),
});

router.get(PATH_CHAPTER, chapterController.getAllChapter);
router.get(`${PATH_CHAPTER}/:id`, chapterController.getChapterById);

router.post(
  PATH_CHAPTER,
  upload.array("page"),
  chapterController.createChapter
);
router.put(`${PATH_CHAPTER}/:id`, chapterController.updateChapter);
router.delete(`${PATH_CHAPTER}/:id`, chapterController.deleteChapter);

export default router;
