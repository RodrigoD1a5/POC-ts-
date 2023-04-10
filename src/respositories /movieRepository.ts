import { QueryResult } from "pg";
import connectionDb from "../config/database.ts";
import { movie } from "../protocols/movieProtocol.ts";

export async function findByName(name: string): Promise<QueryResult<movie>> {
    return await connectionDb.query(`
        SELECT * FROM movies WHERE name = $1
    `, [name])
}

export async function insertMovie(newMovie: movie): Promise<QueryResult<movie>> {
    return await connectionDb.query(`
        INSERT INTO movies (name, platform, genre, status) 
        VALUES ($1,$2,$3,$4);
    `, [newMovie.name, newMovie.platform, newMovie.genre, newMovie.status])
}
