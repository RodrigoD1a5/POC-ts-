import { NextFunction, Request, RequestHandler, Response } from "express";
import { ObjectSchema } from "joi";
import { STATUS_CODE } from "../enums/status.ts";

export const validateSchema = (schema: ObjectSchema): RequestHandler => {
    return (req: Request, res: Response, next: NextFunction): Response | void => {
        const { body } = req;
        const { error } = schema.validate(body, { abortEarly: false });
        if (error) {
            return res.status(STATUS_CODE.UNPROCESSABLE_ENTITY).send(error.details.map(detail => detail.message));
        }
        next();
    };
};