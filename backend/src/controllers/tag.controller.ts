import { Request, RequestHandler, Response } from 'express';
import { Tag } from '../models/Tag';
import { ITag, ITagUpdate, TagResponseType } from '../validations/tag';

export const getTags: RequestHandler = async (req: Request, res: Response)=> {
    try {
        const tags: TagResponseType[] = await Tag.find();
        
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
        const id: string = req.params.id;
        const tag:TagResponseType | null = await Tag.findById(id);
        if(!tag) {
            throw new Error("Tag no encontrado");
        }
        res.json({
            status: "success",
            data: tag,
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
        const ids: string[] = req.body;

        const tags: TagResponseType[] = await Tag.find({ _id: { $in: ids } });

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
        const tag: ITag = req.body;
        const nuevoTag: TagResponseType = await Tag.create(tag);
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
        const id: string = req.params.id;
        const tag: ITagUpdate = req.body;
        const tagActualizado: TagResponseType | null = await Tag.findByIdAndUpdate(id, tag, { new: true });
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
        const id: string = req.params.id;
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
