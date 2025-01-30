import uploadImageParams from "../interfaces/uploadImageParams";
import cloudinary from "../utils/cloudinaryConfig";

export const uploadCloudinaryService = async ({
  files,
  comicId,
  nameChapter
}: uploadImageParams): Promise<string[]> => {
  try {
    const uploadedUrls: string[] = [];

    for (const file of files) {
      const folderPath = `${comicId}/${nameChapter}/`;

      const uploadPromise = new Promise<string>((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          {
            folder: folderPath,
          },
          (error, result) => {
            if (error) {
              console.error("Error subiendo a Cloudinary:", error);
              reject("Error al subir la imagen");
            }
            // Guardar la URL del archivo
            resolve(result?.secure_url || "");
          }
        );
        // Enviar el buffer al stream
        uploadStream.end(file.buffer);
      });
      const url = await uploadPromise;
      uploadedUrls.push(url);
    }
    // Devuelve las URLs de las imágenes subidas
    return uploadedUrls;
  } catch (error) {
    console.error("Error en uploadCloudinaryService: ", error);
    throw new Error("Error al subir la imagen");
  }
};
