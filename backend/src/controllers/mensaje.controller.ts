import { Request, Response } from "express";
import { MensajeInput, MensajeResponseInput } from "../validations/mensaje";
import { Mensaje } from "../models/Mensaje";

export const getMessages = async (req: Request, res: Response) => {
    try {
        const messages: MensajeResponseInput[] = await Mensaje.find();
        res.json({
            status: "success",
            data: messages,
            message: "Mensajes obtenidos correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};

export const getMessageById = async (req: Request, res: Response) => {
    try {
        const id: string = req.params.id;
        const message: MensajeResponseInput | null = await Mensaje.findById(id);
        if(!message) {
            throw new Error("Mensaje no encontrado");
        }
        res.json({
            status: "success",
            data: message,
            message: "Mensaje obtenido correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};

export const createMessage = async (req: Request, res: Response) => {
    try {
        const message: MensajeInput = req.body;
        const newMessage: MensajeInput = await Mensaje.create(message);
        res.json({
            status: "success",
            data: newMessage,
            message: "Mensaje creado correctamente"
        });
    } catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
};
