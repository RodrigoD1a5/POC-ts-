import { QueryResult } from "pg";
import prisma from "../config/database.ts";
import { movie } from "../protocols/movieProtocol.ts";
import { date } from "joi";

async function findByName(name: string): Promise<movie> {
    return await prisma.movies.findFirst({
        where: {
            name
        }
    })
}
async function insertMovie(
    name: string,
    platform: string,
    genre: string,
    status: boolean
): Promise<movie> {
    return await prisma.movies.create({
        data: {
            name,
            platform,
            genre,
            status
        }
    })
}

async function getAll(): Promise<movie[]> {
    return await prisma.movies.findMany()
}

async function getByPlatform(name: string): Promise<movie[]> {
    return await prisma.movies.findMany({
        where: {
            platform: name
        }
    })
}

async function updateMovie(movieUpdate: movie, id: number): Promise<movie> {
    return await prisma.movies.update({
        where: {
            id
        },
        data: {
            name: movieUpdate.name,
            platform: movieUpdate.platform,
            genre: movieUpdate.genre,
            status: movieUpdate.status
        }
    })
}

async function findById(id: number): Promise<movie> {
    return await prisma.movies.findUnique({
        where: {
            id
        }
    })
}

async function deleteMovie(id: number): Promise<movie> {
    return await prisma.movies.delete({
        where: {
            id
        }
    })
}

export default {
    findByName,
    insertMovie,
    getAll,
    updateMovie,
    findById,
    deleteMovie,
    getByPlatform
}