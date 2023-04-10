import { Request, Response } from "express";
import { movie } from "../protocols/movieProtocol.ts";
import Movie from "../services/movieServices.ts";
import { STATUS_CODE } from "../enums/status.ts";


async function createMovie(req: Request, res: Response): Promise<Response> {
    const newMovie = req.body as movie
    try {
        await Movie.create(newMovie)
        return res.sendStatus(STATUS_CODE.CREATED)
    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)

    }
}

async function getAll(req: Request, res: Response): Promise<Response> {
    try {
        const movies = await Movie.getAll()
        return res.status(STATUS_CODE.OK).send(movies)

    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)
    }
}

async function getByPlatform(req: Request, res: Response): Promise<Response> {
    const { name } = req.params

    try {
        const movies = await Movie.getByPlatform(name)
        return res.status(STATUS_CODE.OK).send(movies)
    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)
    }
}


async function updateMovie(req: Request, res: Response): Promise<Response> {
    const movieUpdate = req.body as movie
    const { id } = req.params

    try {
        await Movie.update(movieUpdate, Number(id))
        return res.sendStatus(STATUS_CODE.OK)
    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)

    }
}

async function deleteMovie(req: Request, res: Response): Promise<Response> {
    const { id } = req.params

    try {
        await Movie.deleteMovie(Number(id))
        return res.sendStatus(STATUS_CODE.OK)
    } catch (error) {
        console.log(error)
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message)

    }
}

export {
    createMovie,
    getAll,
    getByPlatform,
    updateMovie,
    deleteMovie
}