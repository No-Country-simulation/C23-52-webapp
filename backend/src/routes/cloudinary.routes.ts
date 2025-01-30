import express from "express";
import cloudinaryController from "../controllers/cloudinary.controller";
import upload from "../utils/upload";

const router = express.Router();

const PATH_CLOUDINARY = "/upload";

router.post(PATH_CLOUDINARY, upload.array("pages"),cloudinaryController.uploadCloudinary);

export default router;
