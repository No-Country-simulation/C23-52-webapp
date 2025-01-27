import { CallbackError, Schema, model } from 'mongoose';
import { IComic, ComicSchema, ComicUpdateSchema } from '../validations/comic';


const comicSchema = new Schema<IComic>(
  {
    title: { type: String, required: true },
    type: [{ type: String, required: true }],
    thumbnail: { type: String, required: true },
    description: { type: String, required: true },
    creator: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
    isPublic: { type: Boolean, default: false },
    tagsGenero: [{ type: Schema.Types.ObjectId, ref: 'Tag' }],
    puntuacion: { type: Number, min: 1, max: 5, default: 1 },
    views: { type: Number, default: 0 }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

comicSchema.pre('save', async function (next) {
  try {
    ComicSchema.parse(this.toObject());
    next();
  } catch (error: any) {
    next(error as CallbackError);
  }
});

comicSchema.pre('findOneAndUpdate', async function (next) {
  try {
    ComicUpdateSchema.parse(this.getUpdate());
    next();
  } catch (error: any) {
    next(error as CallbackError);
  }
});

export const Comic = model<IComic>('Comic', comicSchema);
