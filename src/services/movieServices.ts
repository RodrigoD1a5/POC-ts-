import { movie } from "../protocols/movieProtocol.ts";
import movieRespository from "../respositories /movieRepository.ts";

async function create(movie: movie): Promise<void> {
    const { rows: [movieResult] } = await movieRespository.findByName(movie.name)

    if (movieResult) throw new Error("Filme ja registrado!")

    await movieRespository.insertMovie(movie)
}

async function getAll(): Promise<movie[]> {
    const { rows: movies } = await movieRespository.getAll()
    return movies
}

async function getByPlatform(name: string): Promise<movie[]> {
    const { rows: movies } = await movieRespository.getByPlatform(name)
    return movies
}

async function update(movieUpdate: movie, id: number): Promise<void> {
    const { rows: [movie] } = await movieRespository.findById(id)

    if (!movie) throw new Error('Filme não encontrado')

    await movieRespository.updateMovie(movieUpdate, id)
}

async function deleteMovie(id: number): Promise<void> {
    const { rows: [movie] } = await movieRespository.findById(id)

    if (!movie) throw new Error('Filme não encontrado')

    await movieRespository.deleteMovie(id)
}

export default {
    create,
    getAll,
    update,
    deleteMovie,
    getByPlatform
}

