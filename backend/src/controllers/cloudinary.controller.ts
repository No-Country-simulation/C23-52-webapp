import { Request, Response } from "express";
import cloudinary from "../utils/cloudinaryConfig";

const uploadCloudinary = async (req: Request, res: Response): Promise<void> => {
  try {
    const fileBody = req.files as Express.Multer.File[];

    if (!fileBody) {
      res.status(400).json({ message: "No se subió archivo" });
      return;
    }

    const uploadResult: string[] = [];

    for (const file of fileBody) {
      const uploadPromise = new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "ruminet" },
          (error, result) => {
            if (error) {
              console.error("Error subiendo a Cloudinary:", error);
              return res.status(500).json({ message: "Error al subir la imagen" });
            }
            resolve(result?.secure_url || "");
          }
        )

        uploadStream.end(file.buffer);
      })
      const resultUrl = await uploadPromise;
      uploadResult.push(resultUrl);
    }

    res.status(200).json({ message: "Imagen subida correctamente", url: uploadResult });
  } catch (error) {
    console.log("error en cloudinary controller: ", error);

    res.status(500).json({ message: "Error" });
  }
};

export default {
  uploadCloudinary,
};
