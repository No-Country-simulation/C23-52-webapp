import { Request, RequestHandler, Response } from 'express';
import { Tag } from '../models/Tag';
import { TagInput, TagUpdateInput, TagResponseInput } from '../validations/tag';

export const getTags: RequestHandler = async (req: Request, res: Response)=> {
    try {
        const tags: TagResponseInput[] = await Tag.find();
        
        res.json({
            status: "success",
            data: tags,
            message: "Tags obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};

export const getTagById: RequestHandler = async (req: Request, res: Response)=> {
    try {
        const {id} = req.params;
        const dataTag:TagResponseInput | null = await Tag.findById(id);
        if(!dataTag) {
            throw new Error("Tag no encontrado");
        }
        res.json({
            status: "success",
            data: dataTag,
            message: "Tag obtenido correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};


export const getTagsByIds = async (req: Request, res: Response) => {
    try {
        const {ids} = req.body;

        const tags: TagResponseInput[] = await Tag.find({ _id: { $in: ids } });

        res.json({
            status: "success",
            data: tags,
            message: "Tags obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};


export const createTag: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const tag: TagInput = req.body;
        const nuevoTag: TagResponseInput = await Tag.create(tag);
        res.json({
            status: "success",
            data: nuevoTag,
            message: "Tag creado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};

export const updateTag: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        const tag: TagUpdateInput = req.body;
        const tagActualizado: TagResponseInput | null = await Tag.findByIdAndUpdate(id, tag, { new: true });
        res.json({
            status: "success",
            data: tagActualizado,
            message: "Tag actualizado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};

export const deleteTag: RequestHandler = async (req: Request, res: Response): Promise<void> => {
    try {
        const {id} = req.params;
        await Tag.findByIdAndDelete(id);
        res.json({ mensaje: "Tag eliminado" });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};
