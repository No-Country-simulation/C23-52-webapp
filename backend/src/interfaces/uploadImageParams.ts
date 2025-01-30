interface uploadImageParams {
  files: Express.Multer.File[];
  comicId: string;
  nameChapter: string;
}

export default uploadImageParams;