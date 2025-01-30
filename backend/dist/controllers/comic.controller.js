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
exports.createComic = exports.getComics = void 0;
const Comic_1 = require("../models/Comic");
const cache_1 = require("../config/cache");
const getComics = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const comics = yield Comic_1.Comic.find();
        res.json(comics);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al obtener comics", error });
    }
});
exports.getComics = getComics;
const createComic = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const nuevoComic = yield Comic_1.Comic.create(req.body);
        cache_1.cache.delete('/api/comics');
        res.status(201).json(nuevoComic);
    }
    catch (error) {
        res.status(500).json({ mensaje: "Error al crear comic", error });
    }
});
exports.createComic = createComic;
