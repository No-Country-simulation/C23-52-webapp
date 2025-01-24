import { Request, Response } from 'express';
import { Comic } from '../models/Comic';
import { cache } from '../config/cache';

export const getComics = async (req:Request, res:Response) => {
  try {
    const comics = await Comic.find();
    res.json(comics);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener comics", error });
  }
};

export const createComic = async (req:Request, res:Response) => {
  try {
    const nuevoComic = await Comic.create(req.body);
    cache.delete('/api/comics');
    res.status(201).json(nuevoComic);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al crear comic", error });
  }
}; 