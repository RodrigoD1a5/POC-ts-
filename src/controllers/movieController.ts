import { Request, Response } from "express";
import { movie } from "../protocols/movieProtocol.ts";
import { create } from "../services/movieServices.ts";
import { STATUS_CODE } from "../enums/status.ts";


async function createMovie(req: Request, res: Response): Promise<Response> {
    const newMovie = req.body as movie
    try {
        await create(newMovie)
        return res.sendStatus(STATUS_CODE.CREATED)
    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)

    }

}

export {
    createMovie
}