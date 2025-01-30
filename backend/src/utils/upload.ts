import multer from 'multer';

// Configuración de almacenamiento en memoria
const storage = multer.memoryStorage();
const upload = multer({ storage });

export default upload;