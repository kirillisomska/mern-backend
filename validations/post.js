import { body } from 'express-validator';

export const postCreateValidation = [
    body('title').isLength({ min: 3 }).isString(),
    body('text').isLength({ min: 10 }).isString(),
    body('tags').optional().isArray(),
    body('imageUrl').optional().isString(),
];