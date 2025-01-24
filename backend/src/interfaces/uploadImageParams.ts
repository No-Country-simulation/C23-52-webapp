interface uploadImageParams {
  files: Express.Multer.File[];
  authorId: string;
  comicId: string;
}

export default uploadImageParams;