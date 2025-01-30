"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const tag_controller_1 = require("../controllers/tag.controller");
const swaggerHelpers_1 = require("../utils/swaggerHelpers");
const tag_1 = require("../validations/tag");
const router = (0, express_1.Router)();
// Registrar rutas para tags
swaggerHelpers_1.registry.registerPath({
    method: "get",
    path: `/api/tags/`,
    tags: ['Tags'],
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(tag_1.GetAllTagOutputSchema), 'Lista de tags')
});
swaggerHelpers_1.registry.registerPath({
    method: "get",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: tag_1.TagInputPathParamsSchema
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(tag_1.GetTagOutputSchema), 'Tag encontrado')
});
swaggerHelpers_1.registry.registerPath({
    method: "post",
    path: `/api/tags/`,
    tags: ['Tags'],
    request: {
        body: {
            content: {
                'application/json': {
                    schema: tag_1.CreateTagInputBodySchema
                }
            }
        }
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(tag_1.GetTagOutputSchema), 'Tag creado')
});
swaggerHelpers_1.registry.registerPath({
    method: "patch",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: tag_1.TagInputPathParamsSchema,
        body: {
            content: {
                'application/json': {
                    schema: tag_1.UpdateTagInputBodySchema
                }
            }
        }
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(tag_1.GetTagOutputSchema), 'Tag actualizado')
});
swaggerHelpers_1.registry.registerPath({
    method: "delete",
    path: `/api/tags/{id}`,
    tags: ['Tags'],
    request: {
        params: tag_1.TagInputPathParamsSchema
    },
    responses: (0, swaggerHelpers_1.createStandardResponses)((0, swaggerHelpers_1.CreateServerSuccessSchema)(tag_1.GetTagOutputSchema), 'Tag eliminado')
});
router.get("/", tag_controller_1.getTags);
router.get("/:id", tag_controller_1.getTagById);
router.post("/", tag_controller_1.createTag);
router.patch("/:id", tag_controller_1.updateTag);
router.delete("/:id", tag_controller_1.deleteTag);
exports.default = router;
