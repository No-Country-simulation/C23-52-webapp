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
exports.deleteTag = exports.updateTag = exports.createTag = exports.getTagsByIds = exports.getTagById = exports.getTags = void 0;
const Tag_1 = require("../models/Tag");
const getTags = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield Tag_1.Tag.find();
        res.json({
            status: "success",
            data: tags,
            message: "Tags obtenidos correctamente"
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
exports.getTags = getTags;
const getTagById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const dataTag = yield Tag_1.Tag.findById(id);
        if (!dataTag) {
            throw new Error("Tag no encontrado");
        }
        res.json({
            status: "success",
            data: dataTag,
            message: "Tag obtenido correctamente"
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
exports.getTagById = getTagById;
const getTagsByIds = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { ids } = req.body;
        const tags = yield Tag_1.Tag.find({ _id: { $in: ids } });
        res.json({
            status: "success",
            data: tags,
            message: "Tags obtenidos correctamente"
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
exports.getTagsByIds = getTagsByIds;
const createTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tag = req.body;
        const nuevoTag = yield Tag_1.Tag.create(tag);
        res.json({
            status: "success",
            data: nuevoTag,
            message: "Tag creado correctamente"
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
exports.createTag = createTag;
const updateTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const tag = req.body;
        const tagActualizado = yield Tag_1.Tag.findByIdAndUpdate(id, tag, { new: true });
        res.json({
            status: "success",
            data: tagActualizado,
            message: "Tag actualizado correctamente"
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
exports.updateTag = updateTag;
const deleteTag = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Tag_1.Tag.findByIdAndDelete(id);
        res.json({ mensaje: "Tag eliminado" });
    }
    catch (error) {
        res.status(500).json({
            status: "error",
            message: error instanceof Error ? error.message : "Error desconocido",
            error
        });
    }
});
exports.deleteTag = deleteTag;
