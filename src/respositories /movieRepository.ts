import { QueryResult } from "pg";
import connectionDb from "../config/database.ts";
import { movie } from "../protocols/movieProtocol.ts";

async function findByName(name: string): Promise<QueryResult<movie>> {
    return await connectionDb.query(`
        SELECT * FROM movies WHERE name = $1
    `, [name])
}
async function insertMovie(newMovie: movie): Promise<QueryResult> {
    return await connectionDb.query(`
        INSERT INTO movies (name, platform, genre, status) 
        VALUES ($1,$2,$3,$4);
    `, [newMovie.name, newMovie.platform, newMovie.genre, newMovie.status])
}

async function getAll(): Promise<QueryResult> {
    return await connectionDb.query(`
        SELECT * FROM movies;
    `)
}

async function getByPlatform(name: string): Promise<QueryResult> {
    return await connectionDb.query(`
        SELECT * FROM movies
        WHERE movies.platform ILIKE $1
    `, [name])
}

async function updateMovie(movieUpdate: movie, id: number): Promise<QueryResult> {
    return await connectionDb.query(`
        UPDATE movies 
        SET name = $1 , platform = $2, genre = $3, status = $4
        WHERE id=$5;
    `, [movieUpdate.name, movieUpdate.platform, movieUpdate.genre, movieUpdate.status, id])

}

async function findById(id: number): Promise<QueryResult<movie>> {
    return await connectionDb.query(`
        SELECT * FROM movies WHERE id=$1
    `, [id])
}

async function deleteMovie(id: number): Promise<QueryResult> {
    return await connectionDb.query(`
        DELETE FROM movies WHERE id=$1
    `, [id])
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