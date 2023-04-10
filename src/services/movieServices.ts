import { movie } from "../protocols/movieProtocol.ts";
import { findByName, insertMovie } from "../respositories /movieRepository.ts";

export async function create(movie: movie): Promise<void> {
    const { rows: [movieResult] } = await findByName(movie.name)

    if (movieResult) throw new Error("Filme ja registrado!")

    await insertMovie(movie)
}

