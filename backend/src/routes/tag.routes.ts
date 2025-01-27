import { Router } from "express";
import { getTags, createTag, updateTag, deleteTag, getTagById } from "../controllers/tag.controller";
import { CreateServerSuccessSchema, createStandardResponses, registry } from '../utils/swaggerHelpers';
import { GetAllTagOutputSchema,CreateTagInputBodySchema, TagInputPathParamsSchema, GetTagOutputSchema, UpdateTagInputBodySchema } from "../validations/tag";

const router = Router();

// Registrar rutas para tags
registry.registerPath({
    method: "get",
    path: `/api/tags/`,
    tags: ['Tags'],
    responses: createStandardResponses(CreateServerSuccessSchema(GetAllTagOutputSchema), 'Lista de tags')
});

registry.registerPath({
    method: "get",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: TagInputPathParamsSchema
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetTagOutputSchema), 'Tag encontrado')
});

registry.registerPath({
    method: "post",
    path: `/api/tags/`,
    tags: ['Tags'],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: CreateTagInputBodySchema
                }
            }
        }
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetTagOutputSchema), 'Tag creado')
});

registry.registerPath({
    method: "patch",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: TagInputPathParamsSchema,
        body: {
            content: {
                'application/json': {
                    schema: UpdateTagInputBodySchema
                }
            }
        }
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetTagOutputSchema), 'Tag actualizado')
});

registry.registerPath({
    method: "delete",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: TagInputPathParamsSchema
    },
    responses: createStandardResponses(CreateServerSuccessSchema(GetTagOutputSchema), 'Tag eliminado')
});


router.get("/", getTags);
router.get("/:id", getTagById);
router.post("/", createTag);
router.patch("/:id", updateTag);
router.delete("/:id", deleteTag);

export default router;