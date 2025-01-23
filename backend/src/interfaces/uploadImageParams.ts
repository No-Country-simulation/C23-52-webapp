interface uploadImageParams {
  files: Express.Multer.File[];
  authorId: string;
  comicId: string;
  chapterId: string;
}

export default uploadImageParams;