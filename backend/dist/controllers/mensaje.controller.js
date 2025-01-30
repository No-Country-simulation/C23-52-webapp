"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMessage = exports.getMessageById = exports.getMessages = void 0;
const Mensaje_1 = require("../models/Mensaje");
const getMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const messages = yield Mensaje_1.Mensaje.find();
        res.json({
            status: "success",
            data: messages,
            message: "Mensajes obtenidos correctamente"
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
});
exports.getMessages = getMessages;
const getMessageById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const message = yield Mensaje_1.Mensaje.findById(id);
        if (!message) {
            throw new Error("Mensaje no encontrado");
        }
        res.json({
            status: "success",
            data: message,
            message: "Mensaje obtenido correctamente"
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
});
exports.getMessageById = getMessageById;
const createMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const message = req.body;
        const newMessage = yield Mensaje_1.Mensaje.create(message);
        res.json({
            status: "success",
            data: newMessage,
            message: "Mensaje creado correctamente"
        });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
});
exports.createMessage = createMessage;
