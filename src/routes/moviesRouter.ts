import { Router } from "express";
import { createMovie, deleteMovie, getAll, getByPlatform, updateMovie } from "../controllers/movieController.ts";
import { validateSchema } from "../middlewares/validateSchema.ts";
import { movieSchema } from "../schemas/movieSchema.ts";

const moviesRouter = Router()

moviesRouter.post("/movie", validateSchema(movieSchema), createMovie)
moviesRouter.get("/movie", getAll)
moviesRouter.get("/movie/:name", getByPlatform)
moviesRouter.put("/movie/:id", validateSchema(movieSchema), updateMovie)
moviesRouter.delete("/movie/:id", deleteMovie)

export default moviesRouter