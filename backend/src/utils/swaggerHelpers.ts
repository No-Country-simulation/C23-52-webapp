import { OpenAPIRegistry, extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { z } from 'zod';

extendZodWithOpenApi(z);

export const registry = new OpenAPIRegistry();

const serverErrorSchema = z.object({
    status: z.string(),
    message: z.string(),
    error: z.string()
}).openapi('Error');


export const createStandardResponses = (successSchema: any, successDescription: string) => {
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
    })
};

export const CreateServerSuccessSchema = (successSchema: any) => z.object({
    status: z.string(),
    data: successSchema,
    message: z.string()
}).openapi('Success');