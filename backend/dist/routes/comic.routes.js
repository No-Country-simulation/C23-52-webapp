"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cacheMiddleware_1 = require("../middlewares/cacheMiddleware");
const comic_controller_1 = require("../controllers/comic.controller");
const router = (0, express_1.Router)();
router.get("/", (0, cacheMiddleware_1.cacheMiddleware)(1000 * 60 * 5), comic_controller_1.getComics);
router.post("/", comic_controller_1.createComic);
exports.default = router;
