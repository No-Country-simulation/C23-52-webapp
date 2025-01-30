"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const comic_routes_1 = __importDefault(require("./comic.routes"));
const tag_routes_1 = __importDefault(require("./tag.routes"));
const mensaje_routes_1 = __importDefault(require("./mensaje.routes"));
const router = (0, express_1.Router)();
router.get("/", (req, res) => {
    res.json({ message: "¡Hola desde Express con TypeScript!" });
});
router.use("/comics", comic_routes_1.default);
router.use("/tags", tag_routes_1.default);
router.use("/mensajes", mensaje_routes_1.default);
exports.default = router;
