"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateServerSuccessSchema = exports.createStandardResponses = exports.registry = void 0;
const zod_to_openapi_1 = require("@asteasolutions/zod-to-openapi");
const zod_1 = require("zod");
(0, zod_to_openapi_1.extendZodWithOpenApi)(zod_1.z);
exports.registry = new zod_to_openapi_1.OpenAPIRegistry();
const serverErrorSchema = zod_1.z.object({
    status: zod_1.z.string(),
    message: zod_1.z.string(),
    error: zod_1.z.string()
}).openapi('Error');
const createStandardResponses = (successSchema, successDescription) => {
    return ({
        200: {
            description: successDescription,
            content: {
                'application/json': {
                    schema: successSchema
                }
            }
        },
        500: {
            description: "Error del servidor",
            content: {
                'application/json': {
                    schema: serverErrorSchema
                }
            }
        }
    });
};
exports.createStandardResponses = createStandardResponses;
const CreateServerSuccessSchema = (successSchema) => zod_1.z.object({
    status: zod_1.z.string(),
    data: successSchema,
    message: zod_1.z.string()
}).openapi('Success');
exports.CreateServerSuccessSchema = CreateServerSuccessSchema;
